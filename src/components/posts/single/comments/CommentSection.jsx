import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './CommentSection.css';
import { Button } from '@material-ui/core';
import CommentComponent from './CommentComponent';

const CommentSection = ({ post, addComment }) => {
    const comments = JSON.parse(post.comments);
    const [newComment, setNewComment] = useState({
        username: '',
        text: ''
    });

    const updateNewComment = (field, value) => {
        const commentCopy = Object.assign({}, newComment);
        commentCopy[field] = value;
        setNewComment(commentCopy);
    };

    return (
        <div className='comment-section-container center-container container'>
            <h2>Comments</h2>
            <div className='new-comment-container'>
                <div style={{ width: '100%' }}>
                    <TextField
                        style={{ minWidth: '300px', width: '70%' }}
                        label="Name"
                        variant="outlined"
                        value={newComment.username}
                        onChange={({ target: { value } }) => {
                            setNewComment({
                                username: '',
                                text: ''
                            });
                            updateNewComment('username', value);}
                        } />
                </div>
                <div style={{ marginTop: 10, marginBottom: 10, width: '100%' }}>
                    <TextField
                        style={{ minWidth: '300px', width: '70%' }}
                        multiline
                        rows={3}
                        label="Type some comment"
                        variant="outlined"
                        value={newComment.text}
                        onChange={({ target: { value } }) => updateNewComment('text', value)} />
                </div>
                <Button onClick={() => addComment(newComment)} color='primary' variant='contained'>ADD COMMENT</Button>
            </div>
            <div style={{ marginTop: 20 }}>
                {
                    comments.sort((a, b) => b.date - a.date).map((comment, i) => (
                        <div key={i}>
                            <CommentComponent comment={comment}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
 
export default CommentSection;