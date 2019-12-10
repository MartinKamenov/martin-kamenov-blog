import React from 'react';
import dateService, { dateFormatTypes } from '../../../service/date.service';
import Content from './Content';
import CommentSection from './comments/CommentSection';

const PostContent = ({ post, addComment }) => {
    const formattedDate = dateService.formatDate(
        dateService.getDateFromTime(post.updated),
        dateFormatTypes.Material
    );
    return (
        <div className='center-container black-content slow-transition-container'>
            <h1>{post.title}</h1>
            <h5>{post.subTitle}</h5>
            <div className='date-field'>{formattedDate}</div>
            <img alt={post.title} className='main-image' src={post.imageUrl}/>
            <Content content={post.content}/>
            <CommentSection addComment={addComment} post={post}/>
        </div>
    );
};
 
export default PostContent;