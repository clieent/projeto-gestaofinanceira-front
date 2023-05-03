import React, { useState } from 'react'
import * as S from './styles'
import { type } from 'os'

interface IUser {
    name: string
    email: string
    phone: string
    cpf: string
}

type InputTextProps = {
    user: IUser

}

function InputText() {
    const [user, setUser] = useState<IUser>()

    return (
        <S.Contener>
            <div>e</div>
        </S.Contener>
    )
}

export default InputText
