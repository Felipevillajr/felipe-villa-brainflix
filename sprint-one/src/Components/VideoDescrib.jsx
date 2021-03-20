import React, { Component } from 'react';
import VideoDetails from '../assets/Data/video-details.json';
import ViewsIcon from '../assets/Icons/Icon-views.svg';
import LikesIcon from '../assets/Icons/Icon-likes.svg';



class VideoDescrib extends Component {
    render() {
        
        return (
            <div className='video__section' >
                <h2 className='video__section--title'>{VideoDetails[0].title}</h2>
                <table className='video__section--table'>
                    <tr>
                        <td className='video__section--user__name'>By {VideoDetails[0].channel}</td>
                        <td className='video__section--date'>{new Date(VideoDetails[0].timestamp).toLocaleDateString('en-US')}</td>
                    </tr>
                    <tr>
                        <td className='video__section--views__container'>
                            <div id="views__icon">
                            <img id="views__img" src={ViewsIcon} alt="Views_Icon"/>
                            </div>
                            <div className='video__section--views'>{VideoDetails[0].views}</div>
                        </td>
                        <td className='video__section--likes__container'>
                            <div id="likes__icon">
                            <img id="likes__img" src={LikesIcon} alt="likes_Icon"/>
                            </div>
                            <div className='video__section--likes'>{VideoDetails[0].likes}</div>
                        </td>
                    </tr>
                </table>
                <div className='video__section--description'>{VideoDetails[0].description}</div>
                <div className='video__section--comment__count'>{VideoDetails[0].comments.length} Comments</div>
            </div>
        )
    }
}

export default VideoDescrib 