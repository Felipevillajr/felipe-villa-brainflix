import React, {Component} from 'react'
import Videos from '../../Components/Videos/Videos';
import VideoDes from '../../Components/VideoDescrib/VideoDescrib';
import Comments from '../../Components/Comments/Comments';
import VideoQue from '../../Components/VideoQue/VideoQue'
// import VideoDetails from '../../assets/Data/video-details.json';
import axios from 'axios'

const key = '3D3De7d88376-4c43-4051-a225-c6e026228e2a';

const url = `https://project-2-api.herokuapp.com/videos?api_key=${key}`;

let urlId = '1af0jruup5gu'

const urlWithId = `https://project-2-api.herokuapp.com/videos/${urlId}?api_key=3D3De7d88376-4c43-4051-a225-c6e026228e2a`;


class Videoarea extends Component {
    state = {
        currentVideo: [],
        quedVideos: [],
    }

    componentDidMount() {
        axios.get(urlWithId, {
            params: {
                _limit: 10
            }
        })
        .then((response)=> {
            this.setState({ currentVideo: response.data});
        }).catch(console.log("axios error"))

        axios.get(url)
        .then((response)=> {
            this.setState({ quedVideos: response.data });
        }).catch(console.log("axios error2"))
    }
    

    handleChange = (e, index) => {
        this.setState({
            currentVideo: e, index,
        })
    }
    render(){
        return (
            <div>
                {/* {this.state.currentVideo && this.state.videoque} */}
                <Videos currentVideo = {this.state.currentVideo} > </Videos>
                <section className="desktop__container">
                    <div>
                        <VideoDes quedVideos = {this.state.quedVideos} currentVideo = {this.state.currentVideo}></VideoDes>
                        <Comments currentVideo = {this.state.currentVideo} ></Comments>
                    </div>
                    <VideoQue handleChange={this.handleChange.bind(this)} currentVideo={this.state.currentVideo} quedVideos= {this.state.quedVideos}></VideoQue>  
                </section>
            </div>
    )
    }

}

export default Videoarea