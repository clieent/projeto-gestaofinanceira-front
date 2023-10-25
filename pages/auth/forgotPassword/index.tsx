import { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/forgotPassword'
import AuthLayout from '@/src/layouts/authLayout'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import api from '@/src/config/api/api'

interface IForgotPassword {
    email: string
}

export default function ForgotPassword() {
    const [forgotPassword, setForgotPassword] = useState<IForgotPassword>()
    const [showAlertMessage, setShowAlertMessage] = useState(false)
    const [timer, setTimer] = useState(4)

    const sendEmailToApi = async (e: any) => {
        e.preventDefault()
        await api.post('/auth/reset/password/email/send', forgotPassword)
            .then((response) => {
                if (response.status == 200) {
                    setShowAlertMessage(true)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        if (showAlertMessage) {
            const closeMessageTimer = setTimeout(() => {
                setShowAlertMessage(false)
            }, 4000)

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
                setTimer(4)
            }
        }
    }, [showAlertMessage])

    return (
        <S.Container>
            <h3>Recuperar Senha</h3>
            <S.Content>
                <S.WrapperInput>
                    <InputText
                        placeholder={'Digite seu e-mail'}
                        value={forgotPassword?.email}
                        setState={setForgotPassword}
                        id={'email'}
                        label={'Digite seu e-mail'}
                    />
                </S.WrapperInput>
                <S.WrapperButton>
                    <DefaultButton
                        onClick={sendEmailToApi}
                        ctaButton={'Enviar'}
                    />
                </S.WrapperButton>
            </S.Content>
            <S.WrapperAlertBox showAlertMessage={showAlertMessage}>
                <S.IconItem
                    icon={solid('circle-check')}
                    style={{ color: '#00cb62' }}
                />
                <S.AlertMessage>
                    Solicitação enviada com <strong>SUCESSO.</strong>
                    <br />
                    Verifique seu e-mail.
                </S.AlertMessage>
            </S.WrapperAlertBox>
        </S.Container>
    )
}

ForgotPassword.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
