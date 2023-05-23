import React from 'react'
import * as S from './styles'
import HeaderAuth from '../components/headerAuth'

type AuthLayoutProps = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <S.Container>
            <HeaderAuth/>
            <S.Content>
                <section>{children}</section>
            </S.Content>
        </S.Container>
    )
}
