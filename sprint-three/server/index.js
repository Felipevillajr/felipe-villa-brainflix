const express = require("express");
const app = express();
const PORT = process.env.port || 8081;
const cors = require("cors");
const fs = require("fs");
const videoDetails = require("./data/video-details.json");

app.use("/static", express.static("public/images"));
// app.use("/static", express.static(path.join(__dirname, "public")));

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send(videoDetails);
});

app.get("/videos", (req, res) => {
  res.send(
    videoDetails.map((data) => {
      return data;
    })
  );
});

app.get("/videos/:id", (req, res) => {
  // let idValue = (e) => {for(let key of e.key()){
  //     return key
  // }}
  // let findId = videoDetails.find( videoDetails => videoDetails === `${req.params}`)
  // let filterId = videoDetails.filter( video => video.id  === req.params.body)

  const obj = req.params;

  for (let props in obj) {
    let idFinder = obj[props];
    let foundId = videoDetails.find(
      (videoDetails) => videoDetails.id === idFinder
    );
    return res.send(foundId);
  }
});

app.post("/videos", (req, res) => {
  const newVideo = {
    id: Math.floor(Math.random() * 100000000000 + 1),
    title: req.body.title,
    channel: "User",
    image:
      "http://localhost:8081/static/public/images/Upload-video-preview.jpg",
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };

  fs.readFile("./data/video-details.json", (err, data) => {
    if (err) {
      console.log("error reading file");
    } else {
      const parseMe = JSON.parse(data);
      parseMe.push(newVideo);
      const database = JSON.stringify(parseMe);
      console.log(database);
      fs.writeFile("./data/video-details.json", database, (err) => {
        if (err) {
          console.log(`error in writing file ${err}`);
        } else {
          console.log("writing successful");
        }
      });
    }
  });
  res.send(newVideo);
});

app.post("/comments", (req, res) => {
  const comment = {
    name: req.body.name,
    comment: req.body.comment,
    id: Math.floor(Math.random() * 100000000000 + 1),
    likes: 0,
    timestamp: Date.now(),
  };
  // const vidDetails = fs.readFile('./data/video-details.json', 'utf8', (err, data) => {
  //     if(err) {
  //         console.log("error fs.readfile line 30")
  //     }
  // });
  // const newdata = vidDetails.push(comment)
  // fs.write("./data/video-detail.json", newData);

  console.log(req.body);
  res.send(req.body);
});

// fs.readFile('./data/video-details.json', 'utf8', (err, data) => {
//     if(err) {
//         console.log("error fs.readfile line 30")
//     } else {
//         const databases = JSON.parse(data);
//         databases.forEach(db => {
//             console.log(db.comments)
//         })
//     }
// });

// app.put('/comments/:commentid/like', (req, res) => {

// })

// app.delete('/delete')

app.listen(PORT, () => {});
