import { useState } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import { deleteCookie } from 'cookies-next'

type DropdownMenuProps = {}

export default function DropdownMenu({}: DropdownMenuProps) {
    const [showOptions, setShowOptions] = useState(false)
    const router = useRouter()

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
            <S.DropBtn>
                <h3>P</h3>
            </S.DropBtn>
            <S.Content showOptions={showOptions}>
                <S.Item onClick={() => router.push('/profilePage')}>Editar Perfil</S.Item>
                <S.Item onClick={handleClick}>Sair</S.Item>
            </S.Content>
        </S.Container>
    )
}
