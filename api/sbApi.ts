import axios from 'axios'

const sbApi = axios.create({
    baseURL: 'http://localhost:8080/api',
})

export default sbApi