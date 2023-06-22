import axios from 'axios'
//função para enconder a rota e simplificar a rota
export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})
