import axios from 'axios'

const baseUrl = axios.create({
    baseURL:"http://localhost:8000"
})

export const registerUser = (userData) => {
   return baseUrl.post("/user/signup",  userData )
}

export const login = (userData) => {
   return baseUrl.post("user/login", userData)
}
