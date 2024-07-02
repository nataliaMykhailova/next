import React, {FC} from 'react';

import CommentComponent from "@/components/CommentComponent/CommentComponent";
import {postServices} from "@/services/postsService";
interface IProps{
    id: string
}

const PostsCommentsComponent:FC<IProps> = async ({id}) => {
    const comments = await postServices.getCommentsOfPost(+id)
    return (
        <div>
            {
                comments.map((comment:IComment) => <CommentComponent key={comment.id} comment ={comment}/>)
            }

        </div>
    );
};

export default PostsCommentsComponent;