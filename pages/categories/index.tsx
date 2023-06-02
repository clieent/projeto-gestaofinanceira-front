import { useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/categories'
import InputText from '../../src/components/inputText'
import SelectBox from '@/src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'

interface categoriesProps {
    name: string
}

export default function Categories() {
    const [categories, setCategories] = useState<categoriesProps>()

    const handleClick = (e: any) => {
        e.preventDefault()
        console.log('handleClick')
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
                <DefaultButton onClick={handleClick} ctaButton={'Criar'}  />
            </S.WrapperButton>
        </S.Container>
    )
}
Categories.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
