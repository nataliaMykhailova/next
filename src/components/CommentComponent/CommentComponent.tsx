import React, {FC} from 'react';
interface IProps{
    comment:IComment
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h2>Comment id - {comment.id}</h2>
            <h2>Post id - {comment.postId}</h2>
            <h3>Email - {comment.email}</h3>
            <h3>Name - {comment.name}</h3>
            <h4>Text - {comment.body}</h4>
            <hr/>

        </div>
    );
};

export default CommentComponent;