import React, { useState } from 'react'
import * as S from './styles'
import LateralMain from '../components/lateralMain'
import HeaderMain from '../components/headerMain'
import ContentMain from '../components/contentMain'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <S.Container>
            <LateralMain showMenu={showMenu} setShowMenu={setShowMenu} />

            <S.Body>
                <HeaderMain />
                <S.Page showMenu={showMenu}>
                    <article>{children}</article>
                </S.Page>
            </S.Body>
        </S.Container>
    )
}
