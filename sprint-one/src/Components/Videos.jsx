import React, { Component } from 'react';
import VideoAssets from '../assets/Data/videos.json';

export class Videos extends Component {
    render() {
        return (
            <div className='video'>
                <div className='video__player'>
                    <video id='video__player--bg' width="100%" height='auto' loop poster={VideoAssets[0].image} objectFit='cover' controls>
                        VIDEO NOT SUPPORTED BY BROWSER
                    </video>
                        </div>
                
            </div>
        )
    }
}

export default Videos;