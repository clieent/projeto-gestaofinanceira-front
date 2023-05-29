import { useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/categories'
import InputText from '../../src/components/inputText'
import SelectBox from '@/src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'

interface categoriesProps {
    name: string
    outflow: boolean
}

export default function Categories() {
    const [categories, setCategories] = useState<categoriesProps>()
    const [categoriesOutflow, setCategoriesOutflow] = useState()

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
            <S.WrapperSelect>
                <SelectBox
                    name="Opção"
                    id="outflow"
                    value={categories?.outflow}
                    setState={setCategories}
                    values={[
                        { value: true, label: 'Saída' },
                        { value: false, label: 'Entrada' },
                    ]}
                />
            </S.WrapperSelect>
            <S.WrapperButton>
                <DefaultButton onClick={handleClick} ctaButton={'Criar'}  />
            </S.WrapperButton>
        </S.Container>
    )
}
Categories.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
