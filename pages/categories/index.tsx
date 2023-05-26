import { useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/categories'
import InputText from '../../src/components/inputText'
import SelectBox from '@/src/components/selectBox'

interface categoriesProps {
    name: string
    outflow: boolean
}

export default function Categories() {
    const [categories, setCategories] = useState<categoriesProps>()
    const [categoriesOutflow, setCategoriesOutflow] = useState()

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
            </S.DataInputs>
        </S.Container>
    )
}
Categories.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
