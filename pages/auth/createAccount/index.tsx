import React, { SetStateAction, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import ValidateEmail from '../../../src/util/validates/validateEmail'
import validateCpf from '@/src/util/validates/validateCpf'
import validateName from '@/src/util/validates/validateName'
import validatePhone from '@/src/util/validates/validatePhone'
import validatePassword from '@/src/util/validates/validatePassword'
import validateConfirmPassword from '@/src/util/validates/validateConfirmPassword'
import AuthLayout from '@/src/layouts/authLayout'
import api from '@/src/config/api/api'
import { useRouter } from 'next/router'
import cpfMask from '@/src/util/masks/cpfMask'
import phoneMask from '@/src/util/masks/phoneMask'

interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
    password: string
    confirmPassword?: string
}

interface IFeedBack {
    error: boolean
    helperText: string
    accessed: boolean
}

export default function CreateAccount() {
    const [user, setUser] = useState<IUser>()
    const [firstStep, setFirstStep] = useState(false)
    const [feedBackName, setfeedBackName] = useState<IFeedBack>({
        error: true,
        helperText: '',
        accessed: false,
    })
    const [feedBackPhone, setFeedBackPhone] = useState<IFeedBack>({
        error: true,
        helperText: '',
        accessed: false,
    })
    const [feedBackEmail, setFeedBackEmail] = useState<IFeedBack>({
        error: true,
        helperText: '',
        accessed: false,
    })
    const [feedBackCpf, setFeedBackCpf] = useState<IFeedBack>({
        error: true,
        helperText: '',
        accessed: false,
    })
    const [feedBackPassword, setFeedBackPassword] = useState<IFeedBack>({
        error: true,
        helperText: '',
        accessed: false,
    })
    const [feedBackConfirmPassword, setFeedBackConfirmPassword] =
        useState<IFeedBack>({
            error: true,
            helperText: '',
            accessed: false,
        })

    const router = useRouter()

    const createValidateFunction = (
        key: keyof IUser,
        cb: (value?: any, value2?: any) => boolean,
        helperText: string,
        setFeedBack: React.Dispatch<SetStateAction<IFeedBack>>
    ) => {
        return () => {
            if (user && user[key]) {
                if (!cb(user[key], user['password'])) {
                    setFeedBack({
                        error: true,
                        helperText,
                        accessed: true,
                    })
                } else {
                    setFeedBack({
                        error: false,
                        helperText: '',
                        accessed: true,
                    })
                }
            } else {
                setFeedBack({
                    error: true,
                    helperText: 'O campo não pode estar vazio',
                    accessed: true,
                })
            }
        }
    }

    const disabledFirstButton = () => {
        if( feedBackName.error === true ||  feedBackEmail.error === true ||
            feedBackPhone.error === true){
                return true
        }
        return false
    }

    const disabledButton = () => {
        if (
            feedBackName.error === true ||
            feedBackPassword.error === true ||
            feedBackCpf.error === true ||
            feedBackConfirmPassword.error === true ||
            feedBackEmail.error === true ||
            feedBackPhone.error === true
        ) {
            return true
        }
        return false
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        delete user?.confirmPassword
        api.post('/users', user)
            .then((response) => {
                router.push('/auth/login')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <S.Container>
            <h3>Crie sua conta</h3>
            {!firstStep ? (
                <>
                    <S.DataInputs2>
                        <InputText
                            error={feedBackName.accessed && feedBackName.error}
                            helperText={feedBackName.helperText}
                            placeholder={'Nome completo'}
                            value={user?.name}
                            setState={setUser}
                            id="name"
                            label="Nome"
                            onBlur={createValidateFunction(
                                'name',
                                validateName,
                                'Digite seu nome e sobrenome',
                                setfeedBackName
                            )}
                        />

                        <InputText
                            error={
                                feedBackEmail.accessed && feedBackEmail.error
                            }
                            helperText={feedBackEmail.helperText}
                            placeholder={'E-mail'}
                            value={user?.email}
                            setState={setUser}
                            id="email"
                            label="E-mail"
                            onBlur={createValidateFunction(
                                'email',
                                ValidateEmail,
                                'E-mail inválido',
                                setFeedBackEmail
                            )}
                        />
                        <InputText
                            error={
                                feedBackPhone.accessed && feedBackPhone.error
                            }
                            helperText={feedBackPhone.helperText}
                            placeholder={'Telefone'}
                            value={phoneMask(user?.phone)}
                            setState={setUser}
                            id="phone"
                            label="Telefone"
                            onBlur={createValidateFunction(
                                'phone',
                                validatePhone,
                                'Numero inválido',
                                setFeedBackPhone
                            )}
                        />
                    </S.DataInputs2>
                    <S.WrapperButton>
                        <DefaultButton
                            ctaButton="Continuar"
                            disabled={disabledFirstButton()}
                            onClick={() => setFirstStep(true)}
                        />
                    </S.WrapperButton>
                </>
            ) : (
                <>
                    <S.DataInputs>
                        <InputText
                            error={feedBackCpf.accessed && feedBackCpf.error}
                            helperText={feedBackCpf.helperText}
                            placeholder={'CPF'}
                            value={cpfMask(user?.cpf)}
                            setState={setUser}
                            id="cpf"
                            label="CPF"
                            onBlur={createValidateFunction(
                                'cpf',
                                validateCpf,
                                'Cpf inválido',
                                setFeedBackCpf
                            )}
                        />

                        <InputText
                            error={
                                feedBackPassword.accessed &&
                                feedBackPassword.error
                            }
                            helperText={feedBackPassword.helperText}
                            type={'password'}
                            placeholder={'Senha'}
                            value={user?.password}
                            setState={setUser}
                            id="password"
                            label="Senha"
                            onBlur={createValidateFunction(
                                'password',
                                validatePassword,
                                'Senha tem que ter pelo menos 6 caracteres',
                                setFeedBackPassword
                            )}
                        />

                        <InputText
                            error={
                                feedBackConfirmPassword.accessed &&
                                feedBackConfirmPassword.error
                            }
                            helperText={feedBackConfirmPassword.helperText}
                            type={'password'}
                            placeholder={'Senha'}
                            value={user?.confirmPassword}
                            setState={setUser}
                            id="confirmPassword"
                            label="Confirmar Senha"
                            onBlur={createValidateFunction(
                                'confirmPassword',
                                validateConfirmPassword,
                                'A senhas não batem',
                                setFeedBackConfirmPassword
                            )}
                        />
                    </S.DataInputs>
                    <S.WrapperButton>
                        <DefaultButton
                            ctaButton="Criar"
                            disabled={disabledButton()}
                            onClick={(e: any) => handleClick(e)}
                        />
                    </S.WrapperButton>
                </>
            )}
        </S.Container>
    )
}

CreateAccount.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
