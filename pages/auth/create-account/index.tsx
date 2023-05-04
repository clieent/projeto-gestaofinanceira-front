import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import InputText from '@/src/components/inputText'
import axios from 'axios'
import DefaultButton from '@/src/components/defaultButton'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'

interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
}

function CreateAccount() {
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        console.log(user)
    }, [user])

    const handleClick = () => {
        axios.post('http://localhost:3001/users', user).then((response) => {console.log(response)}).catch((error) => {console.log(error)})
    }
    return (
        <S.Contener>
            <div>
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
            </div>
            <S.WrapperButton>
                <DefaultButton
                    ctaButton="Criar"
                    onClick={handleClick}
                    icon={light('arrow-right')}
                />
            </S.WrapperButton>
        </S.Contener>
    )
}

export default CreateAccount
