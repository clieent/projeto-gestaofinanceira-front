import React from 'react'
import * as S from './styles'

type ContentMainProps = {
    children: React.ReactNode
}

export default function ContentMain({ children }: ContentMainProps) {
    return (
        <S.Container>
            <section>{children}</section>
        </S.Container>
    )
}