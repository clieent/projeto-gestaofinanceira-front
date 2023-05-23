import React from 'react'
import * as S from './styles'
import LateralMain from '../components/lateralMain'
import HeaderMain from '../components/headerMain'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <S.Container>
            <HeaderMain />
            <S.Content>
            <LateralMain />
                <section>{children}</section>
            </S.Content>
        </S.Container>
    )
}
