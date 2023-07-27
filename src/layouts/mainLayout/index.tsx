import React, { useState } from 'react'
import * as S from './styles'
import LateralMain from '../components/lateralMain'
import HeaderMain from '../components/headerMain'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <S.Container>
            <S.WrapperLateralMain showMenu={showMenu}>
                <LateralMain showMenu={showMenu} setShowMenu={setShowMenu} />
            </S.WrapperLateralMain>
            <S.Body>
                <HeaderMain />
                <S.Page showMenu={showMenu}>
                    <article>{children}</article>
                </S.Page>
            </S.Body>
        </S.Container>
    )
}
