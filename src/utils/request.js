import axios from "axios";


const request = async (url,method,data) =>{
    return await axios({
        url,
        method,
        data,
        validateStatus: false
    })
}


export default request