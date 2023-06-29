import React, { useState } from 'react'
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

export default function CreateAccount() {
    const [user, setUser] = useState<IUser>()
    const [feedBackUser, setfeedBackUser] = useState({
        name: {
            error: false,
            helperText: '',
        },
        phone: {
            error: false,
            helperText: '',
        },
        email: {
            error: false,
            helperText: '',
        },
        cpf: {
            error: false,
            helperText: '',
        },
        password: {
            error: false,
            helperText: '',
        },
        confirmPassword: {
            error: false,
            helperText: '',
        },
    })
    const router = useRouter()

    const createValidateFunction = (
        key: keyof IUser,
        cb: (value?: any, value2?: any) => boolean,
        helperText: string
    ) => {
        return () => {
            if (user && user[key]) {
                if (!cb(user[key], user['password'])) {
                    setfeedBackUser((data) => ({
                        ...data,
                        [key]: {
                            error: true,
                            helperText,
                        },
                    }))
                } else {
                    setfeedBackUser((data) => ({
                        ...data,
                        [key]: {
                            error: false,
                            helperText: '',
                        },
                    }))
                }
            } else {
                setfeedBackUser((data) => ({
                    ...data,
                    [key]: {
                        error: true,
                        helperText: 'O campo nao pode estar vazio',
                    },
                }))
            }
        }
    }

    const disabledButton = () => {
        const isAnyFieldEmpty = Object.values(user || {}).some(
            (value) => !value
        )
        const isAnyValidationError = Object.values(feedBackUser).some(
            (field) => field.error
        )
        return (
            isAnyFieldEmpty ||
            isAnyValidationError ||
            Object.keys(user || {}).length !== Object.keys(feedBackUser).length
        )
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        delete user?.confirmPassword
        api.post('/users', user)
            .then((response) => {
                console.log(response)
                router.push('/auth/login')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <S.Container>
            <h3>Crie sua conta</h3>
            <S.DataInputs>
                <InputText
                    error={feedBackUser.name.error}
                    helperText={feedBackUser.name.helperText}
                    placeholder={'Nome completo'}
                    value={user?.name}
                    setState={setUser}
                    id="name"
                    label="Nome"
                    onBlur={createValidateFunction(
                        'name',
                        validateName,
                        'Digite seu nome e sobrenome'
                    )}
                />
                <br />
                <InputText
                    error={feedBackUser.email.error}
                    helperText={feedBackUser.email.helperText}
                    placeholder={'E-mail'}
                    value={user?.email}
                    setState={setUser}
                    id="email"
                    label="E-mail"
                    onBlur={createValidateFunction(
                        'email',
                        ValidateEmail,
                        'E-mail inválido'
                    )}
                />
                <br />
                <InputText
                    error={feedBackUser.phone.error}
                    helperText={feedBackUser.phone.helperText}
                    placeholder={'Telefone'}
                    value={phoneMask(user?.phone)}
                    setState={setUser}
                    id="phone"
                    label="Telefone"
                    onBlur={createValidateFunction(
                        'phone',
                        validatePhone,
                        'Numero inválido'
                    )}
                />
                <br />
                <InputText
                    error={feedBackUser.cpf.error}
                    helperText={feedBackUser.cpf.helperText}
                    placeholder={'CPF'}
                    value={cpfMask(user?.cpf)}
                    setState={setUser}
                    id="cpf"
                    label="CPF"
                    onBlur={createValidateFunction(
                        'cpf',
                        validateCpf,
                        'Cpf inválido'
                    )}
                />
                <br />
                <InputText
                    error={feedBackUser.password.error}
                    helperText={feedBackUser.password.helperText}
                    type={'password'}
                    placeholder={'Senha'}
                    value={user?.password}
                    setState={setUser}
                    id="password"
                    label="Senha"
                    onBlur={createValidateFunction(
                        'password',
                        validatePassword,
                        'Senha tem que ter pelo menos 6 caracteres'
                    )}
                />
                <br />
                <InputText
                    error={feedBackUser.confirmPassword.error}
                    helperText={feedBackUser.confirmPassword.helperText}
                    type={'password'}
                    placeholder={'Senha'}
                    value={user?.confirmPassword}
                    setState={setUser}
                    id="confirmPassword"
                    label="Confirmar Senha"
                    onBlur={createValidateFunction(
                        'confirmPassword',
                        validateConfirmPassword,
                        'A senhas não batem'
                    )}
                />
            </S.DataInputs>
            <br />

            <S.WrapperButton>
                <DefaultButton
                    ctaButton="Criar"
                    disabled={disabledButton()}
                    onClick={(e: any) => handleClick(e)}
                />
            </S.WrapperButton>
        </S.Container>
    )
}

CreateAccount.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
