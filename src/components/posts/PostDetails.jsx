import React from 'react';
import CardComponent from '../common/card/Card';

const PostDetails = ({ post }) => {
    return (
        <CardComponent header={{
            src: 'https://avatars3.githubusercontent.com/u/24592428?s=460&v=4',
            link: '/aboutme',
            name: post.title,
            subheader: `${post.subTitle}\n${post.updated}`
        }}
        cardMedia={{
            link: `/posts/${post.id}`,
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