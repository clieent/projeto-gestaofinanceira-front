import { useEffect, useState } from 'react'
import * as S from '../../../../styles/auth/forgotPassword/resetPassword'
import AuthLayout from '@/src/layouts/authLayout'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import useStore from '@/src/zustand/store'
import { useRouter } from 'next/router'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import api from '@/src/config/api/api'
import * as jose from 'jose'

type resetPasswordType = {
    email?: string
    token?: string
    password: string
    confirmPassword: string
}

interface IResetPassword {}

export default function ResetPassword({}: IResetPassword) {
    const [newPassword, setNewPassword] = useState<resetPasswordType>({
        password: '',
        confirmPassword: '',
    })
    const [showAlertMessage, setShowAlertMessage] = useState(false)
    const [timer, setTimer] = useState(3)
    const router = useRouter()
    const { query } = useRouter()
    const [userEmail, setUserEmail] = useState('')

    const getToken = async (token: string) => {
        await api
            .get(`/verifyToken`, { params: { token } })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
        

    useEffect(() => {   
        const URLQuery = window.location.href
        if(URLQuery.includes('token')) {
            getToken(URLQuery.split('token=')[1])
            decodeToken()
        } else {
            router.push('/auth/login')
        }
    }, [])

    const handleSaveNewPassword = async (e: any) => {
        e.preventDefault()        
        if (userEmail && newPassword.password == newPassword.confirmPassword) {
            await api
                .post(`/auth/forgotPassword/resetPassword`, {
                    email: userEmail,
                    password: newPassword.password,
                })
                .then((response) => {
                    setShowAlertMessage(true)
                    router.push('/auth/login')
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            console.log('As senhas não coincidem!')
        }
    }

    const [tokenURL, setTokenURL] = useState(query?.token)

    const decodeToken = async () => {
        try {
            const token = window.location.href.split('token=')[1]            
            getToken(token)
            const key = new TextEncoder().encode(
                process.env.NEXT_PUBLIC_JWT_SECRET
            )
            const { payload } = await jose.jwtVerify(token, key)
            setUserEmail(payload.email)
            return payload
        } catch (error) {
            console.log(error)
            return null
        }
    }

    useEffect(() => {
        if (showAlertMessage) {
            const closeMessageTimer = setTimeout(() => {
                setShowAlertMessage(false)
            }, 3000)

            const intervalTimer = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1)
            }, 1000)

            if (timer == 0) {
                clearInterval(closeMessageTimer)
                clearInterval(intervalTimer)
            }

            return () => {
                clearTimeout(closeMessageTimer)
                clearInterval(intervalTimer)
                setTimer(3)
            }
        }
    }, [showAlertMessage])

    return (
        <S.Container>
            <h3>Recuperar Senha</h3>
            <S.Content>
                <S.WrapperInput>
                    <InputText
                        type="password"
                        placeholder={'Nova Senha'}
                        value={newPassword.password}
                        setState={setNewPassword}
                        id={'password'}
                        label={'Nova Senha'}
                    />

                    <InputText
                        type="password"
                        placeholder={'Confirmar senha'}
                        value={newPassword.confirmPassword}
                        setState={setNewPassword}
                        id={'confirmPassword'}
                        label={'Confirmar Senha'}
                    />
                </S.WrapperInput>
                <S.WrapperButton>
                    <DefaultButton
                        onClick={(e: any) => handleSaveNewPassword(e)}
                        ctaButton={'Salvar'}
                    />
                </S.WrapperButton>
            </S.Content>
            <S.WrapperAlertBox showAlertMessage={showAlertMessage}>
                <S.IconItem
                    icon={solid('circle-check')}
                    style={{ color: '#00cb62' }}
                />
                <S.AlertMessage>
                    Dados alterados com <strong>SUCESSO</strong>
                </S.AlertMessage>
            </S.WrapperAlertBox>
        </S.Container>
    )
}

ResetPassword.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
