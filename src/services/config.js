import axios from 'axios'

export const http = axios.create({
    //baseURL: 'http://localhost:8080/api/'
    baseURL: 'https://teste-datalab.herokuapp.com/api'
})