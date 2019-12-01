import React from 'react';
import { Query } from 'react-apollo';

import queries from '../../graphql/queries';
import Progressbar from '../common/loading/Progressbar';

const SinglePost = ({ match: { params: { id } }}) => {
    const getPostContent = (post) => {
        return (
            <div>
                <h1>{post.title}</h1>
            </div>
        );
    };
    return (
        <Query query={queries.SINGLE_POST_QUERY} variables={{ id }}>
            {({ loading, error, data }) => {
                if(loading || error) {
                    return <Progressbar message='Fetching posts'/>;
                }

                const post = data.post;
                return getPostContent(post);
            }}
        </Query>
    );
};
 
export default SinglePost;