import { useState } from 'react'
import * as S from './styles'
import * as React from 'react'

type DefaultToggleProps = {
    ctaToggle: string
    status: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DefaultToggle({
    ctaToggle, setState, status
}: DefaultToggleProps) {

    return (
        <S.Container
            onClick={() => {
                setState((prev: boolean) => !prev)
            }}
            status={status}
        >
        <S.ButtonToggle value={"on"}>
            {ctaToggle}
        </S.ButtonToggle>
        </S.Container>
    )
}