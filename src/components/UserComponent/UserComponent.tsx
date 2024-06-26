import React, {FC} from 'react';
import Link from "next/link";
interface IProps{
    user: IUser
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <h2>{user.id}- {user.name}</h2>
            <h4>username - {user.username}</h4>
            <h4>phone - {user.phone}</h4>
            <h4>email - {user.email}</h4>
            <h4>website - {user.website}</h4>
            <Link href={`/${user.id}/posts`}>Show posts of user</Link>
            <hr/>
        </div>
    );
};

export default UserComponent;
