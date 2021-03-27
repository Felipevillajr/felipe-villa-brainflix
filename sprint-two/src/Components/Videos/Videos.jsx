import React, { Component } from 'react';
import '../Videos/Videos.scss'

export class Videos extends Component {

    render() {
        return (
            <div className='video'>
                <div className='video__player'>
                    <video id='video__player--bg' poster={this.props.currentVideo.image} objectFit='cover' controls>
                        <source src='' />
                        VIDEO NOT SUPPORTED BY BROWSER
                    </video>
                        </div>
                
            </div>
        )
    }
}

export default Videos;