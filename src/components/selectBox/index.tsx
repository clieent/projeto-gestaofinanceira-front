import React, { useEffect, useState } from 'react'
import * as S from './styles'

type SelectBoxProps = {
    label: string
    value: string | undefined
    setState: any
    id: string
}

function SelectBox({ label, value, setState, id }: SelectBoxProps) {

    const handleOnChange = (e: { target: any }) => {
        const { value }: string | any = e.target
        setState((data: any) => ({
            ...data,
            [id]: value,
        }))
    }

    return (
        <S.Container>
            <S.ChoicesBox sx={{ minWidth: 120 }}>
                <S.ChoicesFormControl fullWidth>
                    <S.ChoicesInputLabel id="input-label">Escolha</S.ChoicesInputLabel>
                    <S.ChoicesSelect
                        value={value}
                        label="Item"
                        onChange={handleOnChange}
                    >
                        <S.ChoicesMenuItem value={1}>Entradas</S.ChoicesMenuItem>
                        <S.ChoicesMenuItem value={2}>Saídas</S.ChoicesMenuItem>
                        <S.ChoicesMenuItem value={3}>  </S.ChoicesMenuItem>
                    </S.ChoicesSelect>
                </S.ChoicesFormControl>
            </S.ChoicesBox>
        </S.Container>
    )
}

export default SelectBox
