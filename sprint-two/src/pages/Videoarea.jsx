import React, {Component} from 'react'
import Videos from '../Components/Videos';
import VideoDes from '../Components/VideoDescrib';
import Comments from '../Components/Comments';
import VideoQue from '../Components/VideoQue'
import VideoDetails from '../assets/Data/video-details.json';

class Videoarea extends Component {
    state = {
        currentVideo: VideoDetails[0],
        quedVideos: [...VideoDetails]
    }
    
    handleChange = (e, index) => {
        this.setState({
            currentVideo: e, index,
        })
    }
    render(){
        return (
            <div>
                <Videos currentVideo = {this.state.currentVideo} > </Videos>
                <section className="desktop__container">
                    <div>
                        <VideoDes currentVideo = {this.state.currentVideo}></VideoDes>
                        <Comments currentVideo = {this.state.currentVideo} ></Comments>
                    </div>
                    <VideoQue handleChange={this.handleChange.bind(this)} currentVideo={this.state.currentVideo} quedVideos= {this.state.quedVideos}></VideoQue>  
                </section>
            </div>
    )
    }

}

export default Videoarea
