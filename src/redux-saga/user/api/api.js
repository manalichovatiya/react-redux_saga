import axios from "axios"

export const get_user = async() => {
    return axios.get("http://localhost:3001/posts").then((res)=>{
        const data = res.data
        const status = res.status
        return {
            data,
            status
        }
    }).catch((err)=>{
        console.log(err);
    })
}