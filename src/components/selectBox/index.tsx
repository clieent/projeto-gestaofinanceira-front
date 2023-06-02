import React, { useState } from 'react'
import * as S from './styles'

type SelectBoxProps = {
    id: string
    name: string
    value: any
    label?: string | 'demo-simples-select-label'
    setState: any
    values: { value: any; label: string }[]
}

function SelectBox(
    this: any,
    { id, name, value, label, values, setState }: SelectBoxProps
) {
    const handleOnChange = (e: { target: any }) => {
        setState((date: any) => ({
            ...date,
            [id]: e.target.value,
        }))
    }
    return (
        <S.Container>
            <S.ChoicesBox sx={{ minWidth: 120 }}>
                <S.ChoicesFormControl fullWidth>
                    <S.ChoicesInputLabel id="demo-simples-select-label">
                        {name}
                    </S.ChoicesInputLabel>
                    <S.ChoicesSelect
                        labelId={label}
                        id={id}
                        value={value}
                        onChange={handleOnChange}
                    >
                        {values.map((item) => (
                            <S.ChoicesMenuItem value={item.value}>
                                {item.label}
                            </S.ChoicesMenuItem>
                        ))}
                    </S.ChoicesSelect>
                </S.ChoicesFormControl>
            </S.ChoicesBox>
        </S.Container>
    )
}

export default SelectBox
