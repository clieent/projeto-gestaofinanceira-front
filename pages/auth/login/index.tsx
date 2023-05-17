import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import axios from 'axios'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'

interface ILogin {
    email: string
    password: string
}

export default function Login() {
    const [login, setLogin] = useState<ILogin>()

    const handleClick = (login: any) => {
        axios
            .get('http://localhost:3001/users', login)
            .then((response) => {
                console.log(response)
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
                    disabled
                />
            </S.WrapperButton>
        </S.Container>
    )
}
