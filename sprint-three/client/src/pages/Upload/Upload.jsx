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
            <p className='upload__section__title--thumbnail'>VIDEO THUMBNAIL</p>
            <img className='upload__section__thumbnail' src={Thumbnail} alt='Video Thumnail'/>
                <form className='upload__form'>
                    <div className='upload__form--textareas'>
                    <p className="upload__form--title">TITLE YOUR VIDEO</p>
                    <input
                    type="text" 
                    id="title" 
                    name="title"
                    placeholder='Add a title to your video'
                    onChange={this.state.title}
                    />
                    <p className="upload__form--description"> ADD A VIDEO DESCRIPTION</p>
                    <textarea 
                    type="textarea" 
                    id="description" 
                    name="description"
                    placeholder="Add a description of your video"
                    onChange={this.state.description}
                    />
                    </div>
                    <div className="upload__form--border_top">
                    <Link to={`/`}>
                    <button className="upload__form--publish" type="button" onClick={()=> this.uploadHandler() }>PUBLISH</button>
                    </Link>
                    <button className="upload__form--cancel" type='button'>CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Upload