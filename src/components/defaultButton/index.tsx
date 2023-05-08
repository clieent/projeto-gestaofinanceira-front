import React, { useState } from 'react'
import * as S from './styles'

type DefaultButtonProps = {
    onClick: any
    ctaButton: string
}

function DefaultButton({
    onClick,
    ctaButton,
}: DefaultButtonProps) {
    return (
        <S.Container>        
            <S.ClickStack onClick={onClick} spacing={2} direction="row">
                <S.ClickButton>{ctaButton}</S.ClickButton>
            </S.ClickStack>
        </S.Container>
    );
}

export default DefaultButton