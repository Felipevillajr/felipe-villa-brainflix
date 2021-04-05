const express = require("express");
const app = express();
const PORT = process.env.port || 8081;
const cors = require("cors");
const fs = require("fs");
const videoDetails = require("./data/videos.json");

app.use("/static", express.static("public/images"));

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
    id: Math.floor(Math.random() * 100000000000 + 1).toString(),
    title: req.body.title,
    channel: "User",
    image: "http://localhost:8081/static/Upload-video-preview.jpg",
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };

  fs.readFile("./data/videos.json", (err, data) => {
    if (err) {
      console.log("error reading file");
    } else {
      const parseMe = JSON.parse(data);
      parseMe.push(newVideo);
      const database = JSON.stringify(parseMe);
      console.log(database);
      fs.writeFile("./data/videos.json", database, (err) => {
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

  res.send(req.body);
});

app.listen(PORT, () => {});
