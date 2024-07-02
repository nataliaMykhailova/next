import React, {FC} from 'react';

import PostComponent from "@/components/PostComponent/PostComponent";
import {userServices} from "@/services/userServices";

interface IProps{
    id: string
}
const UserPostsComponent:FC<IProps> =async ({id}) => {
    const posts = await userServices.getPostsOfUser(+id);
    return (
        <div>
            {
                posts.map((post:IPost) => <PostComponent key={post.id} post={post}/>)
        }
            
            </div>
    );
};

export default UserPostsComponent;