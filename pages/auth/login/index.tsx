import React, { useState } from 'react'
import * as S from '../../../styles/auth/login'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import AuthLayout from '@/src/layouts/authLayout'
import api from '@/src/api/api'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import useStore from '@/src/zustand/store'

interface ILogin {
    email: string
    password: string
}

export default function Login() {
    const [login, setLogin] = useState<ILogin>()
    const router = useRouter()
    const { setUserId, setName, setCpf, setEmail, setPhone } = useStore()

    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/auth/login', login)
            .then((response) => {
                setCookie('AccessToken', response.data.user.token)
                setUserId(response.data.user._id)
                router.push('/home')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <S.Container>
            <S.DataInputs>
                <InputText
                    placeholder={'E-mail'}
                    value={login?.email}
                    setState={setLogin}
                    id="email"
                    label="E-mail"
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

            <DefaultButton onClick={handleClick} ctaButton="Entrar" />

            <S.WrapperFoot>
                <span>
                    Não tem uma conta ainda?
                    <strong onClick={() => router.push('/auth/createAccount')}>
                        Cadastre aqui
                    </strong>
                </span>
            </S.WrapperFoot>
        </S.Container>
    )
}

Login.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
