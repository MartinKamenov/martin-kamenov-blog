import React, { useEffect, useState, useCallback } from 'react';
import { useLazyQuery } from 'react-apollo';

import queries from '../../../graphql/queries';
import Progressbar from '../../common/loading/Progressbar';

import './SinglePost.css';
import PostContent from './PostContent';

const SinglePost = ({ match: { params: { id } }}) => {
    const [runQuery, { data }] = useLazyQuery(queries.SINGLE_POST_QUERY);
    const getPost = useCallback(() => runQuery({ id }), [runQuery, id]);

    const [post, setPost] = useState(null);

    useEffect(() => {
        if(!data || !data.post) {
            getPost();
        } else {
            setPost(data.post);
        }
    }, [data, getPost]);

    if(!post) {
        return <Progressbar message='Fetching posts'/>;
    }

    return <PostContent post={post}/>;
};
 
export default SinglePost;