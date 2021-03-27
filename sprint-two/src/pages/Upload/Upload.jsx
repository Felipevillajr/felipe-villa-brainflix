import React, { Component } from 'react';
import '../Upload/Upload.scss';
import Thumbnail from '../../assets/images/Upload-video-preview.jpg';

class Upload extends Component {
    render() {
        return (
            <div className='Upload__form'>
            <h1 className='Upload__form__title '>Upload Video</h1>
            <p>VIDEO THUMBNAIL</p>
            <img className='Upload__form__thumbnail' src={Thumbnail} alt='Video Thumnail'/>
                <form>
                    <p>TITLE YOUR VIDEO</p>
                    <input type="text" id="fname" name="fname"/>
                    <p> ADD A VIDEO DESCRIPTION</p>
                    <input type="text" id="lname" name="lname"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Upload