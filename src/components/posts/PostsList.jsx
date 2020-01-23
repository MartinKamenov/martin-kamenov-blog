import React, { useCallback, useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from 'react-apollo';
import { useSelector } from 'react-redux';
import queries from '../../graphql/queries';
import PostDetails from './PostDetails';
import Progressbar from '../common/loading/Progressbar';

const PostList = () => {
    const [runQuery, { data }] = useLazyQuery(queries.ALL_POSTS_QUERY);
    const getPosts = useCallback(() => runQuery({}), [runQuery]);

    const token = useSelector((state) => state.token);

    const [posts, setPosts] = useState([]);

    const [updateLikesMutation, { data: updatedData }] = useMutation(queries.UPDATE_LIKES_MUTATION);
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

    const handleLikeClick = (id) => {
        const postsCopy = [...posts];
        const postIndex = postsCopy.findIndex((p) => p.id === id);
        const post = postsCopy[postIndex];
        if(!post) {
            return;
        }

        const likes = JSON.parse(post.likes);
        let newLike = {
            token
        };

        if(!likes.find((l) => l.token === token)) {
            newLike.action = 'add';
            likes.push({
                token
            });
        } else {
            newLike.action = 'remove';
            const index = likes.findIndex((l) => l.token === token);
            if(index > -1) {
                likes.splice(index, 1);
            }
        }

        post.likes = JSON.stringify(likes);
        postsCopy[postIndex] = post;
        setPosts(postsCopy);

        updateLikes(id, newLike);
    };

    useEffect(() => {
        if(!data) {
            getPosts();
        } else {
            setPosts(data.posts);
        }

        if(updatedData) {
            console.log('Likes were updated');
        }
    }, [getPosts, data, updatedData]);

    if(!data || !data.posts) {
        return (
            <div className='container' style={{ paddingTop: 10 }}>
                <Progressbar message='Fetching posts'/>
            </div>
        );
    }
    return (
        <div className='container' style={{ paddingTop: 10 }}>
            <div className='row slow-transition-container'>
                {
                    posts.map((post) => (
                        <div key={post.id} className='col-md-4 col-sm-6 col-xs-12'>
                            <PostDetails handleLikeClick={handleLikeClick} post={post}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
 
export default PostList;