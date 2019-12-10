import React from 'react';

const CommentSection = ({ comments }) => {
    return (
        <div className='comment-section-container center-container'>
            <h2>Comments</h2>
            {
                comments.map((comment, i) => (
                    <div key={i}>
                        <h3>{comment.username}</h3>
                        <div>{comment.text}</div>
                    </div>
                ))
            }
        </div>
    );
};
 
export default CommentSection;