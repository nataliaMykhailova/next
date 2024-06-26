import React, {FC} from 'react';
import Link from "next/link";
interface IProps {
post:IPost
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <h2>Post id - {post.id}</h2>
            <h2>User id - {post.userId}</h2>
            <h3>Title - {post.title}</h3>
            <h4>Text - {post.body}</h4>
            <Link href={`/posts/${post.id}/comments`}>Show comments of post</Link>
            <hr/>
        </div>
    );
};

export default PostComponent;