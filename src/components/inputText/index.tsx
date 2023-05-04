import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

type InputTextProps = {
    placeholder: string
    value: string | undefined
    setState: any
    id: string
    label: string
}

function InputText({
    placeholder,
    value,
    setState,
    id,
    label,
}: InputTextProps) {
    const handleOnChange = (e: { target: any }) => {
        const { id, value }: string | any = e.target
        setState((date: any) => ({
            ...date,
            [id]: value,
        }))
    }

    return (
        <TextField
            required
            id={id}
            label={label}
            defaultValue={value}
            placeholder={placeholder}
            onChange={handleOnChange}
        />
    )
}

export default InputText
