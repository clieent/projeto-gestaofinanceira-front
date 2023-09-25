import * as S from '@/styles/profilePage'
import MainLayout from '@/src/layouts/mainLayout'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import { useState, useEffect } from 'react'
import api from '@/src/config/api/api'
import useStore from '@/src/zustand/store'
import Avatar from 'react-avatar'
import {
    light,
    regular,
    solid,
} from '@fortawesome/fontawesome-svg-core/import.macro'

type usersType = {
    name: string
    email: string
    phone: string
    cpf: string
}

interface IUsers {
    title: string
}

export default function UserPage({}: IUsers) {
    const [selectDataUser, setSelectDataUser] = useState<usersType>({
        name: '',
        email: '',
        phone: '',
        cpf: '',
    })
    const [refresh, setRefresh] = useState<boolean>(true)
    const { userId } = useStore()

    async function loadDateUsers() {
        await api
            .get('/users/' + `${userId}`)
            .then((response) => {
                setSelectDataUser(response.data.user)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleClickPatch = () => {
        api.patch(`/users/update/${userId}`, { user: selectDataUser })
            .then((reponse) => {
                loadDateUsers()
                console.log(reponse.status)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        if (refresh) {
            loadDateUsers()
            console.log(selectDataUser)
            setRefresh(false)
        }
    }, [refresh])

    return (
        <S.Container>
            <S.Content>
                <S.WrapperImage>
                    <S.WrapperIcon>
                        <S.Icon icon={light('pen-circle')} />
                    </S.WrapperIcon>
                    <Avatar
                        name={selectDataUser?.name ?? ''}
                        round={true}
                        size="114px"
                        color="transparent"
                        alt="Sem Imagem"
                    />
                </S.WrapperImage>
                <S.ContentInputs>
                    <S.WrapperInputs>
                        <h2>Dados da Conta</h2>

                        <InputText
                            placeholder={'Nome'}
                            value={selectDataUser?.name ?? ''}
                            setState={setSelectDataUser}
                            id={'name'}
                            label={'Nome'}
                        />

                        <InputText
                            placeholder={'E-mail'}
                            value={selectDataUser?.email ?? ''}
                            setState={setSelectDataUser}
                            id={'email'}
                            label={'E-mail'}
                        />
                    </S.WrapperInputs>

                    <S.WrapperInputs>
                        <h2>Dados Pessoais</h2>

                        <InputText
                            placeholder={'Telefone'}
                            value={selectDataUser?.phone ?? ''}
                            setState={setSelectDataUser}
                            id={'phone'}
                            label={'Telefone'}
                        />

                        <InputText
                            placeholder={'CPF'}
                            value={selectDataUser?.cpf ?? ''}
                            setState={setSelectDataUser}
                            id={'cpf'}
                            label={'CPF'}
                        />
                    </S.WrapperInputs>
                </S.ContentInputs>

                <S.WrapperButton>
                    <DefaultButton
                        onClick={handleClickPatch}
                        ctaButton={'Alterar Dados'}
                        //onSubmit={uploadImage}
                    />
                </S.WrapperButton>
            </S.Content>
        </S.Container>
    )
}

UserPage.getLayout = function GetLayout(page: any) {
    return <MainLayout pageLayout={'PERFIL'}>{page}</MainLayout>
}
