import React from 'react';
import { Query } from 'react-apollo';
import queries from '../../graphql/queries';

const PostList = () => (
    <Query query={queries.ALL_POSTS_QUERY}>
        {
            ({ loading, error, data }) => {
                debugger;
                if(loading) {
                    return <h4>Loading...</h4>
                }
                if(error) {
                    console.log(error);
                }

                const posts = data.posts;

                return posts.map((post) => (
                    <div key={post.id}>{post.title}</div>
                ));
            }
        }
    </Query>
);
 
export default PostList;