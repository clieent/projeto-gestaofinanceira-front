import validateToken from "./src/util/validateToken";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest) {
    const { pathname } = req.nextUrl

    if(pathname.startsWith('/_next')) {
        return
    }

    const token = req.cookies.get('AccessToken')?.valueOf() ?? ''

    if((pathname.startsWith('/auth/login') || pathname.startsWith('/auth/createAccount')) && !(await validateToken(token?.toString()))) {
        return
    }
    
    if((req.url.includes('/auth/login') || req.url.includes('/auth/createAccount')) && (await validateToken(token?.toString()))) {
        return NextResponse.redirect(new URL('/home', req.url))
    }
    
    if(!(await validateToken(token?.toString()))) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }
}

export const config = {
    matcher: ['/home',
    '/cashFlow',
    '/auth/login',
    '/auth/createAccount'
]
}
