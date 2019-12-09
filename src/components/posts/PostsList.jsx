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
            })
        },
        [updateLikesMutation]
    );

    const handleLikeClick = (id) => {
        const postsCopy = [...posts];
        const post = postsCopy.find((p) => p.id === id);
        if(!post) {
            return;
        }

        const likes = post.likes;
        let newLike = {
            token
        };

        if(!likes.find((l) => l.token === token)) {
            newLike.action = 'Add';
            likes.push({
                token
            })
        } else {
            newLike.action = 'Remove';
            const index = likes.findIndex((l) => l.token === token);
            if(index > -1) {
                likes.splice(index, 1);
            }
        }

        updateLikes(id, newLike);
    }

    useEffect(() => {
        if(!data) {
            getPosts();
        } else {
            setPosts(data.posts);
        }
    }, [getPosts, data]);

    if(!data || !data.posts) {
        return (
            <div className='container' style={{ marginTop: 10 }}>
                <Progressbar message='Fetching posts'/>
            </div>
        );
    }
    return (
        <div className='container' style={{ marginTop: 10 }}>
            <div className='row slow-transition-container'>
                {
                    posts.map((post) => (
                        <div key={post.id} className='col-md-4 col-sm-6'>
                            <PostDetails handleLikeClick={handleLikeClick} post={post}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
 
export default PostList;