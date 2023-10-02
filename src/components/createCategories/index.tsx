import { SetStateAction, useEffect, useState } from 'react'
import * as S from './styles'
import InputText from '../inputText'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/config/api/api'
import useStore from '../../zustand/store'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface categoriesProps {
    title: string
    user_id: string
}

type CreateCategoriesProps = {
    create: boolean
    setRefresh: React.Dispatch<SetStateAction<boolean>>
    setCreate: React.Dispatch<SetStateAction<boolean>>
    setShowToast?: React.Dispatch<SetStateAction<boolean>>
}
export default function CreateCategories({
    create,
    setRefresh,
    setCreate,
    setShowToast,
}: CreateCategoriesProps) {
    const [categories, setCategories] = useState<categoriesProps>({
        title: '',
        user_id: ''
    })
    const { userId } = useStore()
    const [selectedBoxes, setSelectedBoxes] = useState<string[]>([])


    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/categories', categories)
            .then((response) => {
                setShowToast && setShowToast(true)
                console.log(response.status)
                setRefresh(true)
                setCreate(false)
                setCategories((prevCategories) => ({
                    ...prevCategories,
                    title: '',
                }))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleCancelClick = (e: any) => {
        setCreate(!create)
        setCategories((prevCategories) => ({
            ...prevCategories,
            title: '',
        }))
    }

    useEffect(() => {
        setCategories((date: any) => ({
            ...date,
            user_id: userId,
        }))
    }, [setCategories])



    return (
        <S.Container create={create ?? false}>
            <S.Content create={create ?? false}>
                <S.DataInputs>
                    <InputText
                        placeholder={'Categoria'}
                        value={categories?.title}
                        setState={setCategories}
                        id="title"
                        label="Categoria"
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
