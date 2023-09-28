import * as S from '@/styles/profilePage'
import MainLayout from '@/src/layouts/mainLayout'
import InputText from '@/src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import { useState, useEffect } from 'react'
import api from '@/src/config/api/api'
import useStore from '@/src/zustand/store'
import Avatar from 'react-avatar'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import Image from 'next/image'

type usersType = {
    name: string
    email: string
    phone: string
    cpf: string
}

interface IUsers {}

export default function UserPage({}: IUsers) {
    const [selectDataUser, setSelectDataUser] = useState<usersType>({
        name: '',
        email: '',
        phone: '',
        cpf: '',
    })
    const [refresh, setRefresh] = useState<boolean>(true)
    const { userId } = useStore()
    const [selectedImage, setSelectedImage] = useState('')
    const [selectedFile, setSelectedFile] = useState<File>()

    const onSubmit = async () => {
        await api
            .patch(
                `/users/update/avatar/${userId}`,
                { image: selectedFile, id: userId },
                { headers: { 'Content-Type': 'multipart/form-data' } }
            )
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
        onSubmit()
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
                    <S.WrapperIcon htmlFor="imageInput">
                        <input
                            id="imageInput"
                            type="file"
                            hidden
                            onChange={({ target }) => {
                                if (target.files) {
                                    const file = target.files[0]
                                    setSelectedImage(URL.createObjectURL(file))
                                    setSelectedFile(file)
                                }
                            }}
                        />
                        <S.Icon icon={light('pen-circle')} />
                    </S.WrapperIcon>
                    <S.PreviewImage>
                        {selectedImage ? (
                            <Image
                                src={selectedImage}
                                width={'110'}
                                height={'110'}
                            />
                        ) : selectedFile ? (
                            <Avatar
                                name={selectDataUser?.name ?? ''}
                                round={true}
                                size="114px"
                                color="transparent"
                            />
                        ) : (
                            <Image
                                src={`http://localhost:3001/6470d56a96413a392efbfb37.jpg?${new Date().getTime()}`}
                                width={'112'}
                                height={'112'}
                            />
                        )}
                    </S.PreviewImage>
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
                        onClick={() => {
                            handleClickPatch()
                        }}
                        ctaButton={'Alterar Dados'}
                    />
                </S.WrapperButton>
            </S.Content>
        </S.Container>
    )
}

UserPage.getLayout = function GetLayout(page: any) {
    return <MainLayout pageLayout={'PERFIL'}>{page}</MainLayout>
}
