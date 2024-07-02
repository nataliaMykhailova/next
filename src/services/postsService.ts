import {apiService} from "@/services/apiService";
import {urls} from "@/constants/urls";

const postServices = {
    getAll: async (): Promise<IPost[]> => {
        const response = await apiService.get(urls.posts);
        return response.data
    },
    getCommentsOfPost: async (postId:number):Promise<IComment[]> =>{
        const response =await apiService.get(urls.postComments(postId));
        return response.data

    }
}
export {
    postServices
}