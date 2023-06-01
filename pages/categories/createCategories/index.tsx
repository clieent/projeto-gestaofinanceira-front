import { useState } from 'react'
import MainLayout from '../../../src/layouts/mainLayout'
import * as S from '../../../styles/categories'
import InputText from '../../../src/components/inputText'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/api/api'
import { useRouter } from 'next/router'

interface categoriesProps {
    name: string
}

export default function Categories() {
    const [categories, setCategories] = useState<categoriesProps>()
    const router = useRouter()

    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/categories', categories)
            .then((response) => {
                router.push('/home')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <S.Container>
            <S.DataInputs>
                <InputText
                    placeholder={'Categoria'}
                    value={categories?.name}
                    setState={setCategories}
                    id="name"
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
