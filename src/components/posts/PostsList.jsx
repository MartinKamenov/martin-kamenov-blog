import React from 'react';
import { Query } from 'react-apollo';
import queries from '../../graphql/queries';
import PostDetails from './PostDetails';
import Progressbar from '../common/loading/Progressbar';

const PostList = () => (
    <div style={{ marginTop: 10 }}>
        <Query query={queries.ALL_POSTS_QUERY}>
            {
                ({ loading, error, data }) => {
                    if(loading || error) {
                        return <Progressbar message='Fetching posts'/>;
                    }

                    const posts = data.posts;

                    return (
                        <div className='row slow-transition-container'>
                            {
                                posts.map((post) => (
                                    <div className='col-md-4 col-sm-6'>
                                        <PostDetails key={post.id} post={post}/>
                                    </div>
                                ))
                            }
                        </div>
                    );
                }
            }
        </Query>
    </div>
);
 
export default PostList;