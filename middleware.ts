import validateToken from "./src/util/validateCookie";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest) {
    const { pathname } = req.nextUrl

    if(pathname.startsWith('/_next')) {
        return
    }

    const token = req.cookies.get('AccessToken')?.value ?? ''
    console.log('altar', token)

    if(pathname.startsWith('/auth/login') && !validateToken(token?.toString())) {
        return
    }

    if(req.url.includes('/auth/login') && await validateToken(token?.toString())) {
        return NextResponse.redirect(new URL('/home', req.url))
    }
    
    if(!validateToken(token?.toString())) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }
}

export const config = {
    matcher: ['/home', '/auth/login']
}
