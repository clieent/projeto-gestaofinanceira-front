import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/api/api'
import axios from 'axios'

interface ILogin {
    email: string
    password: string
}

export default function Login() {
    const [login, setLogin] = useState<ILogin>()

    const handleClick = (e: any) => {
        e.preventDefault()
        axios
            .post('http://localhost:3001/auth/login', login)
            .then(({data}) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <S.Container>
            <S.DataInputs>
                <InputText
                    placeholder={'Email'}
                    value={login?.email}
                    setState={setLogin}
                    id="email"
                    label="Email"
                />
                <br />
                <InputText
                    type="password"
                    placeholder={'Senha'}
                    value={login?.password}
                    setState={setLogin}
                    id="password"
                    label="Senha"
                />
                <br />
            </S.DataInputs>
            <S.WrapperButton>
                <DefaultButton
                    onClick={handleClick}
                    ctaButton="Entrar"
                    disabled={false}
                />
            </S.WrapperButton>
        </S.Container>
    )
}
