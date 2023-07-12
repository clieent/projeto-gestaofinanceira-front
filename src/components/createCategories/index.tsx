import { SetStateAction, useEffect, useState } from 'react'
import * as S from './styles'
import InputText from '../inputText'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/config/api/api'
import useStore from '../../zustand/store'

interface categoriesProps {
    title: string
    user_id: string
}

type CreateCategoriesProps ={
    create: boolean
    setRefresh: React.Dispatch<SetStateAction<boolean>>
    setCreate:React.Dispatch<SetStateAction<boolean>>
}
export default function CreateCategories({create, setRefresh, setCreate}: CreateCategoriesProps) {
    const [categories, setCategories] = useState<categoriesProps>()
    const { userId } = useStore()

    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/categories', categories)
            .then((response) => {
                console.log(response.status)
                setRefresh(true)
                setCreate(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        setCategories((date: any) => ({
            ...date,
            user_id: userId,
        }))
    }, [setCategories])

    return (
        <S.Container create = {create ?? false}>
            <S.Content create = {create ?? false}>
            <S.DataInputs >
                <InputText
                    placeholder={'Categoria'}
                    value={categories?.title}
                    setState={setCategories}
                    id="title"
                    label="Categoria"
                />
            </S.DataInputs>
            <S.WrapperButton>
                <DefaultButton onClick={handleClick} ctaButton={'Criar'} />
            </S.WrapperButton>
            </S.Content>
        </S.Container>
    )
}
