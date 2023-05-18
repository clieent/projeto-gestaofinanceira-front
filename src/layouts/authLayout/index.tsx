import React from 'react'
import * as S from './styles'

type AuthLayoutProps = {
    children: React.ReactNode
}

export default function AuthLayout({
    children,
}: AuthLayoutProps) {
    return (
        <S.Container>
            <section>{children}</section>
        </S.Container>
    )
}