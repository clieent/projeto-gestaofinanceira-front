import React, { useState } from 'react'
import * as S from '../../../styles/auth/login'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import AuthLayout from '@/src/layouts/authLayout'
import api from '@/src/config/api/api'
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
    const { setUserId, setName, setCpf, setEmail, setPhone, setAvatar } = useStore()

    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/auth/login', login)
            .then((response) => {
                if (createCookie(response)) {
                    router.push('/home')
                }
                console.log('Erro ao logar')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    function createCookie(resp: any) {
        setUserId(resp.data.user._id)
        setCpf(resp.data.user.cpf)
        setEmail(resp.data.user.email)
        setName(resp.data.user.name)
        setPhone(resp.data.user.phone)
        setAvatar(`http://localhost:3001/${resp.data.user._id}.jpg`)
        if (resp != null) {
            setCookie('AccessToken', resp.data.user.token)
            return true
        }
        return false
    }
    return (
        <S.Container>
            <h3>Login</h3>
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

            <S.WrapperButton>
                <DefaultButton onClick={handleClick} ctaButton="Entrar" />
            </S.WrapperButton>

            <S.WrapperFoot>
                <span>
                    Não tem uma conta ainda?
                    <strong onClick={() => router.push('/auth/createAccount')}>
                        Cadastre aqui
                    </strong>
                </span>
                <strong onClick={() => router.push('/auth/forgotPassword')}>Esqueceu sua senha</strong>
            </S.WrapperFoot>
        </S.Container>
    )
}

Login.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
