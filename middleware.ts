import validateToken from './src/util/validates/validateToken'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    if (pathname.startsWith('/_next')) {
        return
    }

    const token = req.cookies.get('AccessToken')?.valueOf() ?? ''

    if (!token) {
            if (pathname.startsWith('/auth')) {
                return NextResponse.rewrite(req.nextUrl)
            } else {
                return NextResponse.redirect(new URL('/auth/login', req.url))
            }
    }

    if (token) {
        if (await validateToken(token?.toString())) {
            if (pathname.startsWith('/auth')) {
                return NextResponse.redirect(new URL('/home', req.url))
            } else {
                return NextResponse.next()
            }
        }
        const expiredTokenResponse = NextResponse.redirect(
            new URL('/auth/expiredSection', req.url)
        )
        expiredTokenResponse.cookies.set('AccessToken', '', {
            expires: new Date(0),
        })
        return expiredTokenResponse
    } else {
        const expiredTokenResponse = NextResponse.redirect(
            new URL('/auth/login', req.url)
        )
        expiredTokenResponse.cookies.set('AccessToken', '', {
            expires: new Date(0),
        })
        return expiredTokenResponse
    }
}

export const config = {
    matcher: [
        '/home',
        '/cashFlow',
        '/auth/login',
        '/auth/createAccount',
        '/categories',
        '/auth/expiredSection',
        '/cashCheck',
        '/categories',
        '/banks',
        '/profilePage',
        '/auth/forgotPassword',
        '/auth/forgotPassword/resetPassword',
    ],
}
