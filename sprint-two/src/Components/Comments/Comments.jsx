import React, { Component } from 'react';
import '../Comments/Comments.scss';

class Comments extends Component {

    render() {
        function handleSubmit(e){
        e.preventDefault();
    }
    if (!this.props.currentVideo.comments) return null

    
        return (
            <>
            <section className="comment__section">
        <form  id="commentForm" className="comment--form">
            <fieldset className="comment--form__fieldset">
                <div id="comment--form__img"></div>
                <div id="comment" for="commentText" >JOIN THE CONVERSATION</div>
                <textarea id="textarea" type="textarea"  name="textarea" placeholder='Add a comment' ></textarea>
            </fieldset>
            <div  className="comment__section--button" >
                <button onClick={handleSubmit} type="submit"className="comment__section--button--here" name="submit">COMMENT</button>
                </div>
        </form>
        </section>
        <section className='commented__section'></section>
        <div id="comment__submmited">
            
        </div>
        <div id="comment__submission">
        <>
        {this.props.currentVideo.comments.map((comment) => {
                return (
                    <div className='comment__section2'>
                    <div className="userimg" ></div>
                    <div className='comment__name'>{comment.name}</div>
                    <div className='comment__timestamp'>{new Date(comment.timestamp).toLocaleDateString('en-US')}</div>
                    <div className='comment__comment'>{comment.comment}</div>
                    </div>
                )
            })}
    </>
        </div>
        </>
        )
    }
}
export default Comments;