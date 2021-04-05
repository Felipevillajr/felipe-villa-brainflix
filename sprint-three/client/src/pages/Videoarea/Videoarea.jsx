import React, { Component } from "react";
import Videos from "../../Components/Videos/Videos";
import VideoDes from "../../Components/VideoDescrib/VideoDescrib";
import Comments from "../../Components/Comments/Comments";
import VideoQue from "../../Components/VideoQue/VideoQue";
import axios from "axios";

let urlId = "1af0jruup5gu";

const urlWithId = `http://localhost:8081/videos/${urlId}`;

const newAPI = "http://localhost:8081/videos";

class Videoarea extends Component {
  state = {
    currentVideo: [],
    quedVideos: [],
  };

  componentDidMount() {
    axios
      .get(urlWithId, {})
      .then((response) => {
        this.setState({ currentVideo: response.data });
      })
      .catch("axios error");

    axios
      .get(newAPI)
      .then((response) => {
        this.setState({ quedVideos: response.data });
      })
      .catch("axios error2");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps && this.props.match.params.id !== undefined) {
      let videoId = `http://localhost:8081/videos/${this.props.match.params.id}`;
      axios
        .get(videoId)
        .then((response) => {
          this.setState({ currentVideo: response.data });
        })
        .catch("axios error4");
    } else if (
      this.props.match.params.id === undefined &&
      this.props !== prevProps
    ) {
      axios
        .get(urlWithId, {})
        .then((response) => {
          this.setState({ currentVideo: response.data });
        })
        .catch("axios error3");
    }
  }

  render() {
    return (
      <>
        {this.state.currentVideo && (
          <div>
            <Videos currentVideo={this.state.currentVideo}> </Videos>
            <section className="desktop__container">
              <div className="desktop__container__width">
                <VideoDes
                  quedVideos={this.state.quedVideos}
                  currentVideo={this.state.currentVideo}
                ></VideoDes>
                <Comments currentVideo={this.state.currentVideo}></Comments>
              </div>
              <VideoQue
                currentVideo={this.state.currentVideo}
                quedVideos={this.state.quedVideos}
                matchProps={this.props.match.params.id}
              ></VideoQue>
            </section>
          </div>
        )}
      </>
    );
  }
}

export default Videoarea;
