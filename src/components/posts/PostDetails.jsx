import React from 'react';
import CardComponent from '../common/card/Card';
import PropTypes from 'prop-types';
import dateService, { dateFormatTypes } from '../../service/date.service';

const PostDetails = ({ post, handleLikeClick }) => {
    const formattedDate = dateService.formatDate(dateService.getDateFromTime(post.updated), dateFormatTypes.Material);

    return (
        <CardComponent header={{
            src: 'https://avatars3.githubusercontent.com/u/24592428?s=460&v=4',
            link: '/aboutme',
            name: post.title,
            subheader: `${post.subTitle}\n${formattedDate}`
        }}
        cardMedia={{
            link: `/posts/${post.id}`,
            imageUrl: post.imageUrl,
            title: post.title
        }}
        cardContent={{
            description: post.description || 'Post has no description'
        }}
        collapse={{
            description: (JSON.parse(post.content)).content.slice(0, 3)
        }}
        hasCardContent={!!post.content}
        hasDescription={!!post.description}
        handleLikeClick={handleLikeClick}
        id={post.id}/>
    );
};

PostDetails.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string,
        content: PropTypes.string.isRequired
    }).isRequired
};
 
export default PostDetails;