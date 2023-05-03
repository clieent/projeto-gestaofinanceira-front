import React, { useState } from 'react'
import * as S from '../../../styles/auth/createAccount'


interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
}

function CreateAccount() {
    const [user, setUser] = useState<IUser>()

    return (
        <S.Contener>
            <div>e</div>
        </S.Contener>
    )
}

export default CreateAccount
