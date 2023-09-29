import { useState } from 'react'
import * as S from '../../../../styles/auth/password/resetPassword'
import AuthLayout from '@/src/layouts/authLayout'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'

interface IResetPassword {}

export default function ResetPassword() {
    const [resetPassword, setResetPassword] = useState<IResetPassword>()
    return (
        <S.Container>
            <h3>Recuperar Senha</h3>
            <S.Content>
                <S.WrapperInput>
                    <InputText
                        placeholder={'Nova Senha'}
                        value={undefined}
                        setState={undefined}
                        id={'password'}
                        label={'Nova Senha'}
                    />

                    <InputText
                        placeholder={'Confirmar senha'}
                        value={undefined}
                        setState={undefined}
                        id={'confirmPassword'}
                        label={'Confirmar Senha'}
                    />
                </S.WrapperInput>
                <S.WrapperButton>
                    <DefaultButton
                        onClick={'handleSavePassword'}
                        ctaButton={'Salvar'}
                    />
                </S.WrapperButton>
            </S.Content>
        </S.Container>
    )
}

ResetPassword.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}
