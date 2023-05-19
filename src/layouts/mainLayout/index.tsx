import React from 'react'
import * as S from './styles'
import LateralMenu from '../components/lateralMenu'
import HeaderMenu from '../components/headerMenu'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({
    children,
}: MainLayoutProps) {
    return (
        <S.Container>
            <S.Menus>
                <LateralMenu />
                <HeaderMenu  />
            </S.Menus>
            <S.Content>
                <section>{children}</section>
            </S.Content>
            
        </S.Container>
    )
}