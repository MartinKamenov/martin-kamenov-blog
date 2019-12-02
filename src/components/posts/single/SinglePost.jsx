import React from 'react';
import { Query } from 'react-apollo';

import queries from '../../../graphql/queries';
import Progressbar from '../../common/loading/Progressbar';

import './SinglePost.css';
import PostContent from './PostContent';

const SinglePost = ({ match: { params: { id } }}) => {
    return (
        <Query query={queries.SINGLE_POST_QUERY} variables={{ id }}>
            {({ loading, error, data }) => {
                if(loading || error) {
                    return <Progressbar message='Fetching posts'/>;
                }

                const post = data.post;
                return <PostContent post={post}/>;
            }}
        </Query>
    );
};
 
export default SinglePost;