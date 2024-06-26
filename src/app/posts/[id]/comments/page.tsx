import React, {FC} from 'react';

import PostsCommentsComponent from "@/components/PostCommentsComponent/PostCommentsComponent";
interface IProps{
    params:{
        id:string
    }
}
const PostCommentsPage:FC<IProps> = ({params:{id}}) => {
    return (
        <div>
            <PostsCommentsComponent id ={id}/>

        </div>
    );
};

export default PostCommentsPage;