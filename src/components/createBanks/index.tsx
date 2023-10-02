import { SetStateAction, useEffect, useState } from 'react'
import * as S from './styles'
import InputText from '../inputText'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/config/api/api'
import useStore from '../../zustand/store'

interface banksProps {
    title: string
    user_id: string
}

type CreateBanksProps = {
    create: boolean
    setRefresh: React.Dispatch<SetStateAction<boolean>>
    setCreate: React.Dispatch<SetStateAction<boolean>>
    setShowToast?: React.Dispatch<SetStateAction<boolean>>
}
export default function CreateBanks({
    create,
    setRefresh,
    setCreate,
    setShowToast
}: CreateBanksProps) {
    const [banks, setBanks] = useState<banksProps>({
        title: '',
        user_id: ''
    })
    const { userId } = useStore()

    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/banks', banks)
            .then((response) => {
                setShowToast && setShowToast(true)
                console.log(response.status)
                setRefresh(true)
                setCreate(false)
                setBanks((prevBanks) => ({
                    ...prevBanks,
                    title: '',
                }))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleCancelClick = (e: any) => {
        setCreate(!create)
        setBanks((prevbanks) => ({
            ...prevbanks,
            title: '',
        }))
    }

    useEffect(() => {
        setBanks((date: any) => ({
            ...date,
            user_id: userId,
        }))
    }, [setBanks])

    return (
        <S.Container create={create ?? false}>
            <S.Content create={create ?? false}>
                <S.DataInputs>
                    <InputText
                        placeholder={'Banco'}
                        value={banks?.title}
                        setState={setBanks}
                        id="title"
                        label="Banco"
                    />
                </S.DataInputs>
                <S.WrapperButton>
                    <DefaultButton onClick={handleClick} ctaButton={'Cadastrar'} />
                    <DefaultButton
                        onClick={handleCancelClick}
                        ctaButton={'Cancelar'}
                    />
                </S.WrapperButton>
            </S.Content>
        </S.Container>
    )
}
