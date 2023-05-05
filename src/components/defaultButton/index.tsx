import React, { useState } from 'react'
import * as S from './styles'


type DefaultButtonProps = {
    ctaButton: string
    onClick: any
    height?: string
    icon?: any
}

function DefaultButton({ 
    ctaButton,
    onClick,
    height,
    icon
}: DefaultButtonProps) {
    return (
        <S.Container onClick={onClick} h={height}>
            <S.Text>{ctaButton}</S.Text>
            <S.Icon icon={icon}></S.Icon>
        </S.Container>
    )
}

export default DefaultButton
