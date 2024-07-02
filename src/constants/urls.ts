const baseURL = 'https://jsonplaceholder.typicode.com';
const urls = {
    users: '/users',
    posts: '/posts',
    comments: '/comments',
    usersPosts: (id:number):string => `${urls.posts}?userId=${id}`,
    postComments:(id:number):string => `${urls.comments}?postId=${id}`
}
export {
    baseURL,
    urls
}