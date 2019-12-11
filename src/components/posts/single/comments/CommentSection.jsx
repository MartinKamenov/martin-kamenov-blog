import React, { useState, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import './CommentSection.css';
import { Button, IconButton, Card, Typography, CardContent } from '@material-ui/core';
import CommentComponent from './CommentComponent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-apollo';
import queries from '../../../../graphql/queries';

const CommentSection = ({ post, addComment }) => {
    const comments = JSON.parse(post.comments);
    const [liked, setLiked] = useState(false);
    const [newComment, setNewComment] = useState({
        username: '',
        text: ''
    });

    const updateNewComment = (field, value) => {
        const commentCopy = Object.assign({}, newComment);
        commentCopy[field] = value;
        setNewComment(commentCopy);
    };

    const token = useSelector((state) => state.token);

    const [updateLikesMutation] = useMutation(queries.UPDATE_LIKES_MUTATION);
    const updateLikes = useCallback(
        (id, like) => {
            updateLikesMutation({
                variables: {
                    id,
                    like: JSON.stringify(like)
                }
            });
        },
        [updateLikesMutation]
    );

    const updateLocally = () => {
        const currentLikeStatus = liked;
        setLiked(!liked);
        updateLikes(post.id, {
            action: currentLikeStatus ? 'remove' : 'add',
            token
        });
    };

    useEffect(() => {
        const likes = JSON.parse(post.likes);
        setLiked(!!likes.find(like => like.token === token));
    }, [token, post]);

    return (
        <div className='comment-section-container center-container container'>
            <Card style={{ width: 200, margin: 'auto' }}>
                <CardContent>
                    <Typography className='project-description-text' variant="body2" color="textSecondary" component="p">
                        Do you like the article?
                    </Typography>
                    <IconButton size='medium' onClick={updateLocally} aria-label="add to favorites">
                        <FavoriteIcon style={{ fontSize: 40 }} color={liked ? 'secondary' : 'action'}/>
                    </IconButton>
                </CardContent>
            </Card>
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