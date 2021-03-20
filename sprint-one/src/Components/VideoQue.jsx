import React, { Component } from 'react';
import Videos from "../assets/Data/video-details.json";

export default class VideoQue extends Component {
    render() {

        
        
        return (
            
        <section className='video__que__section'>
            <div onClick='' className="video__que__nextVideo">NEXT VIDEO</div>

            {Videos.map((videoQue, i)=> {
                
                return (
                    <table>
                        <tr className='video__que__lineup'>
                            <td>
                                <img className='video__que__thumb' src={videoQue.image} alt={videoQue.title}/>
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
