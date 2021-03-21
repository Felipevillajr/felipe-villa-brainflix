import React, { Component } from 'react';

export class Videos extends Component {

    render() {
        return (
            <div className='video'>
                <div className='video__player'>
                    <video id='video__player--bg' width="100%" height='auto' loop poster={this.props.currentVideo.image} objectFit='cover' controls>
                        VIDEO NOT SUPPORTED BY BROWSER
                    </video>
                        </div>
                
            </div>
        )
    }
}

export default Videos;