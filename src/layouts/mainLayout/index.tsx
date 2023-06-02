import React from 'react'
import * as S from './styles'
import LateralMain from '../components/lateralMain'
import HeaderMain from '../components/headerMain'
import ContentMain from '../components/contentMain'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <S.Container>
            <HeaderMain />
            <LateralMain />
            <ContentMain children={children} />
            
            
        </S.Container>
    )
}
