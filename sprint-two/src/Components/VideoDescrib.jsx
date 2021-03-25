import React, { Component } from 'react';
import ViewsIcon from '../assets/Icons/Icon-views.svg';
import LikesIcon from '../assets/Icons/Icon-likes.svg';



export class VideoDescrib extends Component {
    
    render() {
        
        return (
            <div className='video__section' >
                <h2 className='video__section--title'>{this.props.currentVideo.title}</h2>
                <table className='video__section--table'>
                    <tr>
                        <td className='video__section--user__name'>By {this.props.currentVideo.channel}</td>
                        <td className='video__section--date'>{new Date(this.props.currentVideo.timestamp).toLocaleDateString('en-US')}</td>
                    </tr>
                    <tr>
                        <td className='video__section--views__container'>
                            <div id="views__icon">
                            <img id="views__img" src={ViewsIcon} alt="Views_Icon"/>
                            </div>
                            <div className='video__section--views'>{this.props.currentVideo.views}</div>
                        </td>
                        <td className='video__section--likes__container'>
                            <div id="likes__icon">
                            <img id="likes__img" src={LikesIcon} alt="likes_Icon"/>
                            </div>
                            <div className='video__section--likes'>{this.props.currentVideo.likes}</div>
                        </td>
                    </tr>
                </table>
                <div className='video__section--description'>{this.props.currentVideo.description}</div>
                <div className='video__section--comment__count'>{this.props.currentVideo.comments.length} Comments</div>
            </div>
        )
    }
}

export default VideoDescrib 