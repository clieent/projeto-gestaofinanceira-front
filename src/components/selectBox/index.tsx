import React, { useState } from 'react'
import * as S from './styles'

type SelectBoxProps = {
    id: string
    title_name: string
    value: any
    label?: string | 'demo-simples-select-label'
    setState: any
    values: { value: any; label: string }[]
    filterAction: any
}

function SelectBox(
    this: any,
    {
        id,
        title_name,
        value,
        label,
        values,
        setState,
        filterAction,
    }: SelectBoxProps
) {
    const handleOnChange = (e: { target: any }) => {
        console.log(e)
        setState((date: any) => ({
            ...date,
            [id]: e.target.value,
        }))
        filterAction((prev: any) => ({
            ...prev,
            category_id: { title: e.target.label, _id: e.target.value },
        }))
    }
    return (
        <S.Container>
            <S.ChoicesBox sx={{ minWidth: 120 }}>
                <S.ChoicesFormControl fullWidth>
                    <S.ChoicesInputLabel id="demo-simples-select-label">
                        {title_name}
                    </S.ChoicesInputLabel>
                    <S.ChoicesSelect
                        labelId={label}
                        id={id}
                        value={value}
                        onChange={(e) => handleOnChange(e)}
                    >
                        {values.map((item) => {
                            return (
                            <S.ChoicesMenuItem
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </S.ChoicesMenuItem>
                        )})}
                    </S.ChoicesSelect>
                </S.ChoicesFormControl>
            </S.ChoicesBox>
        </S.Container>
    )
}

export default SelectBox
