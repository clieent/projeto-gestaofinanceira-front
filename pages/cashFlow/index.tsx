import React, { useEffect, useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/cashFlow'
import InputText from '../../src/components/inputText'
import SelectBox from '../../src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'
import api from '../../src/api/api'
import useStore from '../../src/zustand/store'

interface releaseDataProps {
    tag: string
    date: Date
    category: string
    description?: string
    value: number
    type: boolean
}
type categoryType = {
    title: string
}[]
export default function CashFlow() {
    const [releaseData, setReleaseData] = useState<releaseDataProps>()
    const { userId } = useStore()
    let [selectCategory, setSelectCategory] = useState<categoryType>([])
    const handleClick = (e: any) => {
        e.preventDefault()
        console.log('handleClick')
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
                    id="category"
                    value={releaseData?.category}
                    setState={setReleaseData}
                    values={selectCategory.map(({ title }) => ({
                        value: title,
                        label: title,
                    }))}
                />
            </S.WrapperSelect>
            <S.DataInputs>
                <InputText
                    placeholder={'Título'}
                    value={releaseData?.tag}
                    setState={setReleaseData}
                    id="tag"
                    label="Título"
                />
                <InputText
                    placeholder={'Descrição'}
                    value={releaseData?.description}
                    setState={setReleaseData}
                    id="description"
                    label="Descrção"
                />
                <InputText
                    placeholder={'R$0,00'}
                    value={releaseData?.value}
                    setState={setReleaseData}
                    id="value"
                    label="Valor"
                    mask="R$ "
                />
                <InputText
                    placeholder={'Data de vencimento'}
                    value={releaseData?.date}
                    setState={setReleaseData}
                    id="date"
                    label="Data de vencimento"
                    mask="99/99/9999"
                />
            </S.DataInputs>
            <S.WrapperSelect>
                <SelectBox
                    name="Tipo"
                    id="type"
                    value={releaseData?.type}
                    setState={setReleaseData}
                    values={[
                        { value: true, label: 'Saída' },
                        { value: false, label: 'Entrada' },
                    ]}
                />
            </S.WrapperSelect>
            <S.WrapperButton>
                <DefaultButton onClick={handleClick} ctaButton={'Lançar'} />
            </S.WrapperButton>
        </S.Container>
    )
}

CashFlow.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
