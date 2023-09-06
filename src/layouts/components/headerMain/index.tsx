import React from 'react'
import * as S from './styles'

type HeaderMainProps = {
    pageTitle: string
}

export default function HeaderMain({ pageTitle }: HeaderMainProps) {
    return (
        <S.Container>
            <S.Title>{pageTitle}</S.Title>
        </S.Container>
    )
}
