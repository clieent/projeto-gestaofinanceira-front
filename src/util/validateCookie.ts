import * as jose from 'jose'

export default async function validateToken(token: string) {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
    try {
        const { payload } = await jose.jwtVerify(token, secret)
        console.log(payload)
        return true
    } catch(error) {
        console.log(error)
        return false
    }
}