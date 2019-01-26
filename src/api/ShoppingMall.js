import axios from 'axios'
import { shoppingMallUrl } from './config'
export function getShoopingMall () {
    return axios.get(shoppingMallUrl).then((res) => {
        if (res.status === 200) return Promise.resolve(res);
    })
}