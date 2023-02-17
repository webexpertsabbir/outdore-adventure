import { loadPost } from "../../Action/Action";


const loadPostData = () =>{
    return async (dispatch, getState) =>{
        const res = await fetch("https://moon-tech-server-seven.vercel.app/posts");
        const data = await res.json();

        if(data.length){
            dispatch(loadPost(data))
        }
    }
}

export default loadPostData;