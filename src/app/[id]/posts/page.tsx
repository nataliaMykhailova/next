import {FC} from "react";
import UserPostsComponent from "@/components/UserPostsComponent/UserPostsComponent";
interface IProps{
    params:{
        id:string
    }
}
const UserPostsPage:FC<IProps> = ({params:{id}}) => {
    return (
        <div>
            <UserPostsComponent id ={id}/>

    </div>
);
};

export default UserPostsPage;