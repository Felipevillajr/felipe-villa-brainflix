import React, { Component } from 'react';







export default class VideoQue extends Component {
    
    render() {

        
        return (
            
        <section className='video__que__section'>
            <div className="video__que__nextVideo">NEXT VIDEO</div>

            {this.props.quedVideos.filter((videos)=> videos.id !== this.props.currentVideo.id).map((videoQue, index)=> { 
                
                return (
                    <table>
                        <tr className='video__que__lineup'>
                            <td>
                                <img onClick={()=>{this.props.handleChange(videoQue, index)}} className='video__que__thumb' src={videoQue.image} alt={videoQue.title}/>
                            </td>
                            <td>
                            <div className='video__que__side'>
                            <div onClick={()=>{this.props.handleChange(videoQue, index)}} className='video__que__side--title'>{videoQue.title}</div>
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
