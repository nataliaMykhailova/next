import React from 'react';
import type {Metadata} from "next";
import {userServices} from "@/services/userServices";

export const generateMetadata= async ({params}:{params:{id:string}}): Promise<Metadata> => {
    const user = await userServices.getOne(+params.id)
    return {
        title: user.name,
    }
};
type Props = {children: React.ReactNode}

const PostLayout = ({children}:Props) => {
    return (
        <div>
            {children}
            </div>
    );
};

export default PostLayout;