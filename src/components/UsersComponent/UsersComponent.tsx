import React, {FC} from 'react';

import UserComponent from "@/components/UserComponent/UserComponent";
import {userServices} from "@/services/userServices";

const UsersComponent:FC = async () => {
    const users = await userServices.getAll();
    console.log(users);
    return (
        <div>
            {
                users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;