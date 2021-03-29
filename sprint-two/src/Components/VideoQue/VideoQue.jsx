import React, { Component } from 'react';
import '../VideoQue/VideoQue.scss'
import {Link} from 'react-router-dom'





class VideoQue extends Component {

    
    
    render() {
        

        if (!this.props.quedVideos) return null
        
        return (
            
        <section className='video__que__section'>
            <div className="video__que__nextVideo">NEXT VIDEO</div>

            {this.props.quedVideos.filter((videos)=> videos.id !== this.props.currentVideo.id).map((videoQue, index)=> { 
                
                return (
                    
                    <table>
                        <tr className='video__que__lineup' id= {videoQue.id} key={index}>
                            <td>
                                <Link to={`/videos/${videoQue.id}`} key={videoQue.id}>
                                <img className='video__que__thumb' src={videoQue.image} alt={videoQue.title}/>
                                </Link>
                            </td>
                            <td>
                            <div className='video__que__side'>
                            <div className='video__que__side--title'>{videoQue.title}</div>
                            <div className='video__que__side--user'>{videoQue.channel}</div>
                            </div>
                            </td>
                        </tr>
                    </table>
                    
                    )
            })}
            
        </section>
        )
    }
}

export default VideoQue