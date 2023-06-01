import { useEffect, useState } from 'react'
import MainLayout from '../../../src/layouts/mainLayout'
import * as S from '../../../styles/categories'
import SelectBox from '@/src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/api/api'
import { useRouter } from 'next/router'
import useStore from '../../../src/zustand/store'

interface DeleteCategoriesProps {
    categoryId: string
}
type categoryType = {
    title: string
    _id: string
}[]

export default function DeleteCategories() {
    const [deleteCategories, setDeleteCategories] =
        useState<DeleteCategoriesProps>({ categoryId: '' })
    const { userId } = useStore()
    const router = useRouter()
    let [selectCategory, setSelectCategory] = useState<categoryType>([])

    const handleClick = (e: any) => {
        e.preventDefault()
        api.delete(`/categories/${deleteCategories.categoryId}`)
        router.push('/home')
    }

    useEffect(() => {
        loadDate()
    }, [])

    async function loadDate() {
        const { data } = await api.get<categoryType>('/categories', {
            params: { userId },
        })
        setSelectCategory(data)
    }
    return (
        <S.Container>
            <S.WrapperSelect>
                <SelectBox
                    name="Categoria"
                    id="categoryId"
                    value={deleteCategories.categoryId}
                    setState={setDeleteCategories}
                    values={selectCategory.map(({ title, _id }) => ({
                        value: _id,
                        label: title,
                    }))}
                />
            </S.WrapperSelect>
            <S.WrapperButton>
                <DefaultButton
                    disabled={deleteCategories.categoryId === ''}
                    onClick={handleClick}
                    ctaButton={'Deletar'}
                />
            </S.WrapperButton>
        </S.Container>
    )
}
DeleteCategories.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
