import {apiService} from "@/services/apiService";
import {urls} from "@/constants/urls";

const userServices = {
    getAll: async (): Promise<IUser[]> => {
        const response = await apiService.get(urls.users);
        return response.data;
    },
    getOne: async (id:number):Promise<IUser> =>{
        const response = await apiService.get(urls.users+'/'+id);
        return response.data
    },
    getPostsOfUser: async (userId:number):Promise<IPost[]> =>{
       const response = await apiService.get(urls.usersPosts(userId));
       return response.data
    }
}
export {
    userServices
}