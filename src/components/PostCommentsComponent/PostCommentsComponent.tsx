import React from 'react';

import CommentComponent from "@/components/CommentComponent/CommentComponent";

const PostsCommentsComponent:({id}: { id: string }) => Promise<React.JSX.Element> = async ({id}) => {
    const comments = await fetch(`https://jsonplaceholder.typicode.com//comments?postId=${id}`)
        .then(value => value.json());
    return (
        <div>
            {
                comments.map((comment:IComment) => <CommentComponent key={comment.id} comment ={comment}/>)
            }

        </div>
    );
};

export default PostsCommentsComponent;