import {apiService} from "@/services/apiService";
import {urls} from "@/constants/urls";

const commentsService ={
    getAll: async ():Promise<IComment[]> =>{
        const response = await apiService.get(urls.comments);
        return response.data
    }
}
export {
    commentsService
}