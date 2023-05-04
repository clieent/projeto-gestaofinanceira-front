import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import InputText from '@/src/components/inputText'
import axios from 'axios'

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
        axios.post('http://localhost:3001/users', user)
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
                <InputText
                    placeholder={'E-mail'}
                    value={user?.email}
                    setState={setUser}
                    id="email"
                    label="E-mail"
                />
                <InputText
                    placeholder={'Telefone'}
                    value={user?.phone}
                    setState={setUser}
                    id="phone"
                    label="Telefone"
                />
                <InputText
                    placeholder={'CPF'}
                    value={user?.cpf}
                    setState={setUser}
                    id="cpf"
                    label="CPF"
                />
            </div>
            <button onClick={handleClick}>Criar</button>
        </S.Contener>
    )
}

export default CreateAccount
