import { deleteCookie } from 'cookies-next'
import validateToken from './src/util/validateToken'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    if (pathname.startsWith('/_next')) {
        return
    }

    const token = req.cookies.get('AccessToken')?.valueOf() ?? ''
    //if
    if(!token) {
        if(pathname.startsWith('/auth')) {
            return NextResponse.rewrite(req.nextUrl)
        } else {
            return NextResponse.redirect(new URL('/auth/expiredSection', req.url))
        }
    }
    
    if(token && (await validateToken(token?.toString()))) {
        if(pathname.startsWith('/auth')) {
            return NextResponse.redirect(new URL('/home', req.url))
        } else {
            return NextResponse.next()
        }
    } else {
        deleteCookie("AccessToken")
        return NextResponse.redirect(new URL('/auth/expiredSection', req.url))
    }    
}
    
export const config = {
    matcher: ['/home', '/cashFlow', '/auth/login', '/auth/createAccount', '/categories', '/auth/expiredSection'],
}
