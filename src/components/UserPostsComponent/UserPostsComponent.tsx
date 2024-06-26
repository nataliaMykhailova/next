import React from 'react';

import PostComponent from "@/components/PostComponent/PostComponent";
const UserPostsComponent:({id}: { id: string }) => Promise<React.JSX.Element> = async ({id}) => {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(value => value.json());
    return (
        <div>
            {
                posts.map((post:IPost) => <PostComponent key={post.id} post={post}/>)
        }
            
            </div>
    );
};

export default UserPostsComponent;