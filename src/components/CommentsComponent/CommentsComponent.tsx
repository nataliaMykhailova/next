import React from 'react';

import CommentComponent from "@/components/CommentComponent/CommentComponent";

const CommentsComponent = async () => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
    return (
        <div>
            {
                comments.map((comment:IComment)=><CommentComponent key={comment.id} comment={comment}/>)
            }
            
        </div>
    );
};

export default CommentsComponent;