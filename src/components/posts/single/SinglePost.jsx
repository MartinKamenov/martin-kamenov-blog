import React from 'react';
import { Query } from 'react-apollo';

import queries from '../../../graphql/queries';
import Progressbar from '../../common/loading/Progressbar';

import './SinglePost.css';

const SinglePost = ({ match: { params: { id } }}) => {
    const getPostContent = (post) => {
        return (
            <div className='center-container white-content'>
                <h1>{post.title}</h1>
                <h5>{post.subTitle}</h5>
                <img className='main-image' src={post.imageUrl}/>
                <p>{post.content}</p>
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