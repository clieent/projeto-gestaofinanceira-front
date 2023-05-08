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
    password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
    item: string
}

function CreateAccount() {
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        console.log(user)
    }, [user])

    const handleClick = () => {
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
            </S.DataInputs>
            <br />

            <S.WrapperButton>
                <DefaultButton
                    ctaButton="Criar"
                    onClick={handleClick}
                    icon={light('arrow-right')}
                />
            </S.WrapperButton>
            <br />

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
