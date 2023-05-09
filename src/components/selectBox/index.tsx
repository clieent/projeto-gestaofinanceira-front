import React, { useEffect, useState } from 'react'
import * as S from './styles'

interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
    item: string
}

type SelectBoxProps = {
    label: string
    userItem: string | undefined
    setUserItem: any
    id: string
    ctaBox: any
    options: string[]
}

function SelectBox({
    userItem,
    setUserItem,
    options,
    ctaBox,
}: SelectBoxProps) {
    const handleOnChange = (e: { target: any }) => {
        const { value, name }: string | any = e.target
        setUserItem((prev: IUser) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <S.Container>
            <S.ChoicesBox sx={{ minWidth: 120 }}>
                <S.ChoicesFormControl fullWidth>
                    <S.ChoicesInputLabel id="input-label">
                        {ctaBox}
                    </S.ChoicesInputLabel>
                    <S.ChoicesSelect
                        value={userItem}
                        label="Item"
                        name="item"
                        onChange={(e) => {
                            handleOnChange(e)
                        }}
                    >
                        {options.map((option) => (
                            <S.ChoicesMenuItem value={option}>
                                {option}
                            </S.ChoicesMenuItem>
                        ))}
                    </S.ChoicesSelect>
                </S.ChoicesFormControl>
            </S.ChoicesBox>
        </S.Container>
    )
}

export default SelectBox

// const options = ["Entradas", "Saídas"]
// type Props = {
//    item?: any
// }