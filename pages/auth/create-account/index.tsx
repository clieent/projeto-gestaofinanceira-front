import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/auth/createAccount'
import InputText from '@/src/components/inputText'


interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
}

function CreateAccount() {
    const [user, setUser] = useState<IUser>()

    useEffect(() => {console.log(user)},[user])

    return (
        <S.Contener>
            <div>e</div>
            <InputText placeholder={'Diego lindo'} value={user?.name} setState={setUser} id = 'name'/>
        </S.Contener>
    )
}

export default CreateAccount
