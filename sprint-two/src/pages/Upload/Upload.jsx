import React, { Component } from 'react';
import '../Upload/Upload.scss';
import Thumbnail from '../../assets/images/Upload-video-preview.jpg';
import {Link} from 'react-router-dom';

class Upload extends Component {
    state = {
        title: '',
        description: '',
    }


    uploadHandler = () => {
        alert("your video has been uploaded");
        
    }

    render() {
        return (
            <div className='upload__section'>
            <h1 className='upload__section__title'>Upload Video</h1>
            <p>VIDEO THUMBNAIL</p>
            <img className='upload__section__thumbnail' src={Thumbnail} alt='Video Thumnail'/>
                <form className='upload__form'>
                    <p className="upload__form--title">TITLE YOUR VIDEO</p>
                    <input
                    type="text" 
                    id="title" 
                    name="title"
                    onChange={this.state.title}
                    />
                    <p className="upload__form--description"> ADD A VIDEO DESCRIPTION</p>
                    <input 
                    type="text" 
                    id="description" 
                    name="description"
                    onChange={this.state.description}
                    />
                    <Link to={`/`}>
                    <button className="upload__form--publish" type="button" onClick={()=> this.uploadHandler() }>PUBLISH</button>
                    </Link>
                    <button className="upload__form--cancel" type='button'>CANCEL</button>
                </form>
            </div>
        )
    }
}

export default Upload