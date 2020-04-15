import axios from 'axios';

export default class DataApi {
    static getData(cb) {
        axios.get('http://localhost:4000/products')
        .then(res => cb(res))
        .catch(error => { throw error });
    }
}