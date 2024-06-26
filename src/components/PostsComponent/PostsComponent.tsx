import React from 'react';

import PostComponent from "@/components/PostComponent/PostComponent";

const PostsComponent = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    return (
        <div>
            {
                posts.map((post:IPost) => <PostComponent key={post.id} post={post}/>)
            }
            
            </div>
    );
};

export default PostsComponent;