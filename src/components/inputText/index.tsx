import React, { useState } from 'react'
import * as S from './styles'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'; 

type InputTextProps = {
    placeholder: string
    value: string | undefined
    setState: any
    id: string
}

function InputText({placeholder, value, setState, id}: InputTextProps) {
    
    const handleOnChange = (e: { target: any }) => {
        const { id, value }: string | any = e.target
        setState((date: any) => ({
            ...date,
            [id]: value,
        }))
    }

    return (
        <S.Contener>
            <TextField
                required
                id={id}
                label="Nome"
                defaultValue={value}
                placeholder= {placeholder}
                onChange={handleOnChange}
            />
            <div>e</div>
            <Button variant="contained">Hello World</Button>
        </S.Contener>
    )
}

export default InputText
