import axios from 'axios'

const url = 'http://localhost:9090'

export const register = async (name: string, email: string, password: string): Promise<void> => {
    const data = {"role": "user", "name": name, "email": email, "password": password}
    try {
        const response = await axios.post(url + '/user', data, {withCredentials: true})
        console.log(response.data) 
    }catch(erro) {
        console.log("nao foi possivel fazer a requisiçao devido ao error: " + erro)
    }
}

export const login = async (email: string, password: string): Promise<void> => {
    const data = {"email": email, "password": password}
    try {
        const response = await axios.post(url + '/user/login', data, {withCredentials: true})
        console.log(response.data.user)
    }catch(erro) {
        console.log("nao foi possivel fazer a requisiçao devido ao error: " + erro)
    }
}

export const get = async (): Promise<void> => {
    try {
        const response = await axios.get(url + '/user', {withCredentials: true})
        console.log( document.cookie)
        console.log(response.data)
    }catch(erro) {
        console.log("nao foi possivel fazer a requisiçao devido ao error: " + erro)
    }
}