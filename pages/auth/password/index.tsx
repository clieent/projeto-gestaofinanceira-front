import { useState } from 'react'
import * as S from '../../../styles/auth/password'
import AuthLayout from '@/src/layouts/authLayout'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'

interface IPassword {}

export default function Password() {
    const [password, setPassword] = useState<IPassword>()
    return (
        <S.Container>
            <h3>Recuperar Senha</h3>
            <S.Content>
                <S.WrapperInput>
                    <InputText
                        placeholder={'Digite seu e-mail'}
                        value={undefined}
                        setState={undefined}
                        id={'email'}
                        label={'Digite seu e-mail'}
                    />
                </S.WrapperInput>
                <S.WrapperButton>
                    <DefaultButton
                        onClick={'handleInvitePassword'}
                        ctaButton={'Enviar'}
                    />
                </S.WrapperButton>
            </S.Content>
        </S.Container>
    )
}

Password.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
