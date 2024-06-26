import React from 'react';

import UserComponent from "@/components/UserComponent/UserComponent";

const UsersComponent = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return (
        <div>
            {
                users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;