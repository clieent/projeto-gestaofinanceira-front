import React, { useRef, useState } from 'react'
import InputMask from 'react-input-mask'
import * as S from './styles'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'

type InputTextProps = {
    placeholder: string
    value: string | any
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

    const inputRef = useRef(null)
    
    const handleOnChange = (e: { target: any }) => {
        const { id, value }: string | any = e.target
        setState((date: any) => ({
            ...date,
            [id]: value,
        }))
    }
    const [inputType, setInputType] = useState(type)
    
    const handleSeePassword = () => {
        if (inputType == 'password') {
            setInputType('text')
            return
        }
        setInputType('password')
    }

    return (
        <S.Container>
            <S.InputBox
                type={inputType}
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <S.InputTextField
                    fullWidth
                    onBlur={onBlur}
                    error={error}
                    type={inputType}
                    variant="outlined"
                    id={id}
                    label={label}
                    helperText={helperText}
                    placeholder={placeholder}
/*                     inputComponent={InputMask}
                    inputProps={{ mask }} */
                    InputProps={{
                        inputComponent: InputMask as any,
                        inputProps: { mask },
                    }}
                    ref={inputRef}
                    value={value}
                    onChange={handleOnChange}
                />
                {type == 'password' ? (
                    inputType == 'password' ? (
                        <S.WrapperIcon>
                            <S.Icon
                                onClick={handleSeePassword}
                                icon={light('eye-slash')}
                            />
                        </S.WrapperIcon>
                    ) : (
                        <S.WrapperIcon>
                            <S.Icon
                                onClick={handleSeePassword}
                                icon={light('eye')}
                            />
                        </S.WrapperIcon>
                    )
                ) : null}
            </S.InputBox>
        </S.Container>
    )
}

export default InputText
