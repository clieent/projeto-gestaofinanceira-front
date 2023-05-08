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
}

function SelectBox({ userItem, setUserItem }: SelectBoxProps) {

    const handleOnChange = (e: { target: any }) => {
        const { value, name } : string | any = e.target
        setUserItem((prev: IUser) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <S.Container>
            <S.ChoicesBox sx={{ minWidth: 120 }}>
                <S.ChoicesFormControl fullWidth>
                    <S.ChoicesInputLabel id="input-label">Escolha</S.ChoicesInputLabel>
                    <S.ChoicesSelect
                        value={userItem}
                        label="Item"
                        name="item"
                        onChange={(e) => {handleOnChange(e)}}
                    >
                        <S.ChoicesMenuItem value={1}>Entradas</S.ChoicesMenuItem>
                        <S.ChoicesMenuItem value={2}>Saídas</S.ChoicesMenuItem>
                    </S.ChoicesSelect>
                </S.ChoicesFormControl>
            </S.ChoicesBox>
        </S.Container>
    )
}

export default SelectBox
