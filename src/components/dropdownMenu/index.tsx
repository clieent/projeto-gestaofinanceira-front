import { useEffect, useState } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import { deleteCookie } from 'cookies-next'
import Avatar from 'react-avatar'
import api from '@/src/config/api/api'
import useStore from '@/src/zustand/store'

type usersType = {
    name: string
}

type DropdownMenuProps = {}

export default function DropdownMenu({}: DropdownMenuProps) {
    const [showOptions, setShowOptions] = useState(false)
    const [selectDataUser, setSelectDataUser] = useState<usersType>({
        name: '',
    })
    const { userId } = useStore()
    const [refresh, setRefresh] = useState<boolean>(true)
    const router = useRouter()

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

    useEffect(() => {
        if (refresh) {
            loadDateUsers()
            console.log(selectDataUser)
            setRefresh(false)
        }
    }, [refresh])

    const handleShowMenu = () => {
        setShowOptions((prev) => !prev)
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        deleteCookie('AccessToken')
        router.push('/auth/login')
    }

    return (
        <S.Container
            onClick={() => {
                handleShowMenu()
            }}
        >
            <S.DropMenu>
                <Avatar
                    name={selectDataUser?.name ?? ''}
                    round={true}
                    size="60px"
                    color="transparent"
                    alt="Sem Imagem"
                />
            </S.DropMenu>
            <S.Content showOptions={showOptions}>
                <S.Item onClick={() => router.push('/profilePage')}>
                    Editar Perfil
                </S.Item>
                <S.Item onClick={handleClick}>Sair</S.Item>
            </S.Content>
        </S.Container>
    )
}