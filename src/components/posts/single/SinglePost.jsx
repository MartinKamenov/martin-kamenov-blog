import React, { useEffect, useState, useCallback } from 'react';
import { useLazyQuery, useMutation } from 'react-apollo';

import queries from '../../../graphql/queries';
import Progressbar from '../../common/loading/Progressbar';

import './SinglePost.css';
import PostContent from './PostContent';

const SinglePost = ({ match: { params: { id } }}) => {
    const [runQuery, { data }] = useLazyQuery(queries.SINGLE_POST_QUERY);
    const getPost = useCallback(() => runQuery({ id }), [runQuery, id]);

    const [post, setPost] = useState(null);

    const [updateCommentsMutation, { data: updatedData }] = useMutation(queries.UPDATE_COMMENTS_MUTATION);
    const addComment = useCallback(
        (comment) => {
            const date = new Date();
            comment.date = date.getTime();
            const variables = {
                id,
                comment: JSON.stringify(comment),
            };
            const postCopy = {...post};
            const comments = JSON.parse(post.comments);
            comments.push({
                ...comment
            });
            postCopy.comments = JSON.stringify(comments);
            updateCommentsMutation({
                variables
            });
        },
        [updateCommentsMutation, id, post]
    );

    useEffect(() => {
        if(!data || !data.post) {
            getPost();
        } else {
            setPost(data.post);
        }

        if(updatedData) {
            console.log('Comments were updated');
        }
    }, [data, getPost, updatedData]);

    if(!post) {
        return <Progressbar message='Fetching posts'/>;
    }

    return <PostContent post={post} addComment={addComment}/>;
};
 
export default SinglePost;