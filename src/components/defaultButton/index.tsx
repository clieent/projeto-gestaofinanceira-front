import React from 'react'
import * as S from './styles'

type DefaultButtonProps = {
    onClick: any
    ctaButton: string
    disabled?: boolean | true
}

function DefaultButton({
    onClick,
    ctaButton,
    disabled = false,
}: DefaultButtonProps) {
    return (
        <S.Container>
            <S.ClickStack
                onClick={(e) => {
                    if (!disabled) {
                        onClick(e)
                    }
                }}
                spacing={2}
                direction="row"
            >
                <S.ClickButton variant="contained" disabled={disabled}>
                    {ctaButton}
                </S.ClickButton>
            </S.ClickStack>
        </S.Container>
    )
}

export default DefaultButton
