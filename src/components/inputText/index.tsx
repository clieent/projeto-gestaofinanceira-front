import React from 'react'
import InputMask from 'react-input-mask'
import * as S from './styles'

type InputTextProps = {
    placeholder: string
    value: string | undefined
    setState: any
    id: string
    label: string
    type?: string | 'required'
    mask?: any
    error?: boolean
    helperText?: string
    onBlur?: any
}

function InputText(
    this: any,
    {
        placeholder,
        value,
        setState,
        id,
        label,
        type,
        mask,
        error,
        helperText,
        onBlur,
    }: InputTextProps
) {
    const handleOnChange = (e: { target: any }) => {
        const { id, value }: string | any = e.target
        setState((date: any) => ({
            ...date,
            [id]: value,
        }))
    }

    return (
        <S.Container>
            <S.InputBox
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <S.InputTextField
                    fullWidth
                    onBlur={onBlur}
                    error={error}
                    type={type}
                    variant="outlined"
                    id={id}
                    label={label}
                    helperText={helperText}
                    placeholder={placeholder}
                    InputProps={{
                        inputComponent: InputMask as any,
                        inputProps: { mask },
                    }}
                    value={value}
                    onChange={handleOnChange}
                />
            </S.InputBox>
        </S.Container>
    )
}

export default InputText
