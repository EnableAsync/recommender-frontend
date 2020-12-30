import axios from 'axios'


const userService = axios.create({
  baseURL: 'http://localhost:8088/rest/users',
  timeout: 5000
})
const movieService = axios.create({
  baseURL: 'http://localhost:8088/rest/movie',
  timeout: 5000
})


export  {userService,movieService}
