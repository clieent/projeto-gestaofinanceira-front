import React, { useState } from 'react'
import * as S from '../../../styles/auth/login'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import AuthLayout from '@/src/layouts/authLayout'
import api from '@/src/api/api'
import { setCookie, getCookies, deleteCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ILogin {
    email: string
    password: string
}

export default function Login() {
    const [login, setLogin] = useState<ILogin>()
    const router = useRouter()

    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/auth/login', login)
            .then((response) => {
                console.log(response)
                setCookie('AccessToken', response.data.user.token)

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
                <DefaultButton onClick={handleClick} ctaButton="Entrar" />
            </S.WrapperButton>
            <S.WrapperFoot>
                <footer>
                    <p>
                        Não tem uma conta ainda?
                        <Link href="http://localhost:3000/auth/createAccount">
                            Cadastre aqui
                        </Link>
                        !
                    </p>
                </footer>
            </S.WrapperFoot>
        </S.Container>
    )
}

Login.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
