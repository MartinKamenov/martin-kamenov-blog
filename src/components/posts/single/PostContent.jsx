import React from 'react';
import dateService, { dateFormatTypes } from '../../../service/date.service';
import Content from './Content';

const PostContent = ({ post }) => {
    const formattedDate = dateService.formatDate(
        dateService.getDateFromTime(post.updated),
        dateFormatTypes.Material
    );
    return (
        <div className='center-container white-content slow-transition-container'>
            <h1>{post.title}</h1>
            <h5>{post.subTitle}</h5>
            <div className='date-field'>{formattedDate}</div>
            <img alt={post.title} className='main-image' src={post.imageUrl}/>
            <Content content={post.content}/>
        </div>
    );
};
 
export default PostContent;