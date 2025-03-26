//  axios 연동을 위한 공통 API
import axios from "axios";

// put method
export async function axiosPut({url, data}){
    let result = null;
    
    try{
        result = await axios({
                        method: 'put',
                        url : url,
                        data:data
                 }).then(res =>res.data);

    }catch( error){
        console.log(error); 
    }

    return result;
}

// post method
export async function axiosPost({url, data}){
    let result = null;
    
    try{
        result = await axios({
                        method: 'post',
                        url : url,
                        data:data
                 }).then(res =>res.data);

    }catch( error){
        console.log(error); 
    }

    return result;
}

// delete method
export async function axiosDelete({url, data}){
    let result = null;
    
    try{
        result = await axios({
                        method: 'delete',
                        url : url,
                        data:data
                 }).then(res =>res.data);

    }catch( error){
        console.log(error); 
    }

    return result;
}

// get method
export async function axiosGet({url, data}){
    let result = null;
    
    try{
        result = await axios({
                        method: 'get',
                        url : url,
                        data:data
                 }).then(res =>res.data);

    }catch( error){
        console.log(error); 
    }

    return result;
}