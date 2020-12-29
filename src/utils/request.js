import axios from 'axios'


const service = axios.create({
  baseURL: 'http://localhost:8080/recommender/rest',
  timeout: 5000
})


export default service
