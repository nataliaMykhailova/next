import React, {FC} from 'react';

import CommentComponent from "@/components/CommentComponent/CommentComponent";
import {commentsService} from "@/services/commentsService";

const CommentsComponent:FC = async () => {
    const comments = await commentsService.getAll();
    return (
        <div>
            {
                comments.map((comment:IComment)=><CommentComponent key={comment.id} comment={comment}/>)
            }
            
        </div>
    );
};

export default CommentsComponent;