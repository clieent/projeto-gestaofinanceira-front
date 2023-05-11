import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import axios from 'axios'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import ValidateEmail from '../../../src/util/validateEmail'
import validateCpf from '@/src/util/validateCpf'
import validateName from '@/src/util/validateName'
import validatePhone from '@/src/util/validatePhone'
import validatePassword from '@/src/util/validatePassword'

interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
    password: string
}

function CreateAccount() {
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
    })

    const createValidateFunction = (
        key: keyof IUser,
        cb: (value: any) => boolean,
        helperText: string
    ) => {
        return () => {
            if (user && user[key]) {
                if (!cb(user[key])) {
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
        const isValid = Object.values(feedBackUser).find((item) => {
            return item.error
        })
        if (isValid) {
            return true
        }
        return false
    }

    useEffect(() => {
        console.log(user)
    }, [user])

    const handleClick = (user: any) => {
        axios
            .post('http://localhost:3001/users', user)
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
                        'Diegite seu nome e sobrenome'
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
                    value={user?.phone}
                    setState={setUser}
                    id="phone"
                    label="Telefone"
                    mask="(99)99999-9999"
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
                    value={user?.cpf}
                    setState={setUser}
                    id="cpf"
                    label="CPF"
                    mask="999.999.999-99"
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
                    type={'password'}
                    placeholder={'Senha'}
                    value={user?.password}
                    setState={setUser}
                    id="password"
                    label="Confirmar Senha"
                />
            </S.DataInputs>
            <br />

            <S.WrapperButton>
                <DefaultButton
                    ctaButton="Criar"
                    disabled={disabledButton()}
                    onClick={handleClick}
                />
            </S.WrapperButton>
        </S.Container>
    )
}

export default CreateAccount
