import React from 'react';
import { Query } from 'react-apollo';

import queries from '../../graphql/queries';

const SinglePost = ({match: { params: {id} }}) => {
    const getPostContent = (post) => {
        return (
            <div>
                <h1></h1>
            </div>
        );
    }
    return (
        <Query query={queries.SINGLE_POST_QUERY} variables={{ id }}>
            {({ loading, error, data }) => {
                debugger;
                if(loading) {
                    return <h4>Loading...</h4>
                }
                if(error) {
                    console.log(error);
                }

                const post = data.post;
                return (
                    getPostContent(post)
                );
            }}
        </Query>
    );
}
 
export default SinglePost;