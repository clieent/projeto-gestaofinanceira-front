import React from 'react'
import * as S from './styles'
import HeaderMenu from '../components/headerMenu'

type AuthLayoutProps = {
    children: React.ReactNode
}

export default function AuthLayout({
    children,
}: AuthLayoutProps) {
    return (
        <S.Container>
            <S.Header>
                <HeaderMenu />
            </S.Header>
            <S.Content>
                <section>{children}</section>
            </S.Content>
        </S.Container>
    )
}