import React, {FC} from 'react';
import PostComponent from "@/components/PostComponent/PostComponent";
import {postServices} from "@/services/postsService";

const PostsComponent:FC = async () => {
    const posts = await postServices.getAll();
    return (
        <div>
            {
                posts.map((post:IPost)=><PostComponent key={post.id} post={post}/>)
            }

        </div>
    );
};

export default PostsComponent;