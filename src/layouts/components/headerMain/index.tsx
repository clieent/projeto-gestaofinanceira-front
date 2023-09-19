import React from 'react'
import * as S from './styles'
import DropdownMenu from '@/src/components/dropdownMenu'

type HeaderMainProps = {
    pageTitle: string
}

export default function HeaderMain({ pageTitle }: HeaderMainProps) {
    return (
        <S.Container>
            <S.Title>{pageTitle}</S.Title>
            <DropdownMenu />
        </S.Container>
    )
}
