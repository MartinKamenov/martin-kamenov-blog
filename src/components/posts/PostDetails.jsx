import React from 'react';
import CardComponent from '../common/card/Card';

const PostDetails = ({ post }) => {
    return (
        <CardComponent header={{
            src: post.imageUrl,
            link: `/users/${post.id}`,
            name: post.title,
            subheader: post.subTitle
        }}
        cardMedia={{
            link: `/projects/${post.id}`,
            imageUrl: post.imageUrl,
            title: post.title
        }}
        cardContent={{
            description: post.description
        }}
        collapse={{
            description: post.description
        }}
        hasCardContent
        hasDescription/>
    );
};
 
export default PostDetails;