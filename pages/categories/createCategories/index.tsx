import { useEffect, useState } from 'react'
import MainLayout from '../../../src/layouts/mainLayout'
import * as S from '../../../styles/categories'
import InputText from '../../../src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/api/api'
import { useRouter } from 'next/router'
import useStore from '../../../src/zustand/store'

interface categoriesProps {
    title: string
    user_id: string
}

export default function Categories() {
    const [categories, setCategories] = useState<categoriesProps>()
    const router = useRouter()
    const { userId } = useStore()

    const handleClick = (e: any) => {
        e.preventDefault()
        console.log(categories)
        api.post('/categories', categories)
            .then((response) => {
                router.push('/home')
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
        <S.Container>
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
                <DefaultButton onClick={handleClick} ctaButton={'Criar'} />
            </S.WrapperButton>
        </S.Container>
    )
}
Categories.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
