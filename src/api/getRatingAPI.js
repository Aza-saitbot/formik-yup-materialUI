import * as axios from "axios";

export const GetRatingApi = async () => {
    let res = await axios.get('http://testwork.rdbx24.ru/api/')
    if(res.status === 200){
        return res.data.result
    }
}


