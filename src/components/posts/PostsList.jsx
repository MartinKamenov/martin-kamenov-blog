import React, { useCallback, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import queries from '../../graphql/queries';
import PostDetails from './PostDetails';
import Progressbar from '../common/loading/Progressbar';

const PostList = () => {
    const [runQuery, { data }] = useLazyQuery(queries.ALL_POSTS_QUERY);
    const getPosts = useCallback(() => runQuery({}), [runQuery]);

    useEffect(() => {
        if(!data) {
            getPosts();
        }
    }, [getPosts, data]);

    if(!data || !data.posts) {
        return (
            <div className='container' style={{ marginTop: 10 }}>
                <Progressbar message='Fetching posts'/>
            </div>
        );
    }

    const posts = data.posts;
    return (
        <div className='container' style={{ marginTop: 10 }}>
            <div className='row slow-transition-container'>
                {
                    posts.map((post) => (
                        <div key={post.id} className='col-md-4 col-sm-6'>
                            <PostDetails post={post}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
 
export default PostList;