import axios from 'axios'
import jwt from 'jsonwebtoken'

export const register = async (name:string, email:string, password:string): Promise<object | undefined> => {
    const body = {
        name,
        email,
        password
    }
    try {
        const response = await axios.post('http://localhost:5000/register', body)
        return response
    }catch(erro) {
        console.log("nao foi possivel fazer a requisiçao devido ao error: " + erro)
    }
}