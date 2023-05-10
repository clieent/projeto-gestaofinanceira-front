import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import axios from 'axios'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import ValidateEmail from '../../../src/util/validateEmail'

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

    const validateFields = () => {
        if (user?.name) {
            if (user.name === '') {
                setfeedBackUser((data) => ({
                    ...data,
                    name: {
                        error: true,
                        helperText: 'Insira seu nome aqui',
                    },
                }))
                return
            }
            if (!user.name.includes(' ')) {
                setfeedBackUser((data) => ({
                    ...data,
                    name: {
                        error: true,
                        helperText: 'Digite nome e sobrenome',
                    },
                }))
                return
            }
        } else {
            setfeedBackUser((data) => ({
                ...data,
                name: {
                    error: false,
                    helperText: '',
                },
            }))
        }
        if (user?.email) {
            if (!ValidateEmail(user.email)) {
                setfeedBackUser((data) => ({
                    ...data,
                    email: {
                        error: true,
                        helperText: 'E-mail inválido',
                    },
                }))
            }
        } else {
        }
    }
    const disabledButton = () => {
        const arrayProps = Object.keys(feedBackUser)
        const isValid = Object.values(feedBackUser).find((item) => {
            return item.error
        })
        if (isValid) {
            return false
        }
        return true
    }

    useEffect(() => {
        console.log(user)
        // validateFields()
    }, [user])

    // useEffect(() => {
    //     console.log(feedBackUser)
    // }, [feedBackUser])
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
                    onBlur={validateFields}
                />
                <br />
                <InputText
                    placeholder={'E-mail'}
                    value={user?.email}
                    setState={setUser}
                    id="email"
                    label="E-mail"
                />
                <br />
                <InputText
                    placeholder={'Telefone'}
                    value={user?.phone}
                    setState={setUser}
                    id="phone"
                    label="Telefone"
                    mask="(99)99999-9999"
                />
                <br />
                <InputText
                    placeholder={'CPF'}
                    value={user?.cpf}
                    setState={setUser}
                    id="cpf"
                    label="CPF"
                    mask="999.999.999-99"
                />
                <br />
                <InputText
                    error={true}
                    helperText="Qualquer coisa ai"
                    type={'password'}
                    placeholder={'Senha'}
                    value={user?.password}
                    setState={setUser}
                    id="password"
                    label="Senha"
                />
                <br />
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
