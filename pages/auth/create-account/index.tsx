import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import axios from 'axios'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import { z } from 'zod'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import SelectBox from '@/src/components/selectBox'

const createUserFormSchema = z.object({
    name: z
        .string()
        .nonempty('O nome é obrigatorio')
        .transform((name) => {
            return name
                .trim()
                .split(' ')
                .map((word) => {
                    return word[0].toLocaleUpperCase().concat(word.substring(1))
                })
                .join(' ')
        }),
    email: z
        .string()
        .nonempty('O e-mail é obrigatorio')
        .email('Formato de e-mail inválido')
        .toLowerCase(),
    password: z
        .string()
        .nonempty('A senha é obrigatoria')
        .min(6, 'A senha precisa de no mínimo 6 caracteres'),
    cpf: z
        .string()
        .nonempty('O cpf é obrigatorio')
        .min(11, 'Cpf inválido')
        .max(11, 'Cpf inválido'),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
    item: string
    password: string
}

function CreateAccount() {
    const [user, setUser] = useState<IUser>()
    const [nameInputError, setNameInputError] = useState(false)

    useEffect(() => {
        console.log(user)
    }, [user])

    const handleClick = () => {
        const parse = createUserFormSchema.safeParse(user)
        if (!parse.success) {
            console.log(parse.error)
            if (parse.error.issues.find((error) => error.path[0] == 'name')) {
                setNameInputError(true)
            }
        } else {
            console.log(parse.data)
            axios
                .post('http://localhost:3001/users', user)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <S.Container>
            <S.DataInputs>
                {nameInputError && <h1>Nome em branco</h1>}
                <InputText
                    placeholder={'Nome completo'}
                    value={user?.name}
                    setState={setUser}
                    id="name"
                    label="Nome"
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
                    type={'disabled'}
                    placeholder={'Telefone'}
                    value={user?.phone}
                    setState={setUser}
                    id="phone"
                    label="Telefone"
                />
                <br />
                <InputText
                    placeholder={'CPF'}
                    value={user?.cpf}
                    setState={setUser}
                    id="cpf"
                    label="CPF"
                />
                <br />
                <InputText
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
                <DefaultButton ctaButton="Criar" onClick={handleClick} />
            </S.WrapperButton>

            <S.ChoiceBox>
                <SelectBox
                    setUserItem={setUser}
                    userItem={user?.item}
                    id={'item'}
                    label={'item'}
                />
            </S.ChoiceBox>
            <br />
        </S.Container>
    )
}

export default CreateAccount
