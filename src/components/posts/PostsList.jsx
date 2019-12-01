import React from 'react';
import { Query } from 'react-apollo';
import queries from '../../graphql/queries';
import PostDetails from './PostDetails';

const PostList = () => (
    <div className='row' style={{ marginTop: 10 }}>
        <Query query={queries.ALL_POSTS_QUERY}>
            {
                ({ loading, error, data }) => {
                    if(loading) {
                        return <h4>Loading...</h4>;
                    }
                    if(error) {
                        console.log(error);
                    }

                    const posts = data.posts;

                    return posts.map((post) => (
                        <div className='col-md-4 col-sm-6'>
                            <PostDetails key={post.id} post={post}/>
                        </div>
                    ));
                }
            }
        </Query>
    </div>
);
 
export default PostList;