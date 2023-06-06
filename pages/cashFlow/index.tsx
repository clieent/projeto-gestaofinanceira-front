import React, { useEffect, useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/cashFlow'
import InputText from '../../src/components/inputText'
import SelectBox from '../../src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'
import api from '../../src/api/api'
import useStore from '../../src/zustand/store'
import dateMask from '@/src/util/masks/dateMask'
import monetaryMask from '@/src/util/masks/monetaryMask'

interface releaseDataProps {
    title: string
    dueDate: string
    category_id: string
    description?: string
    value: any
    type: boolean
    user_id: string
}
type categoryType = {
    title: string
    _id: string
}[]
export default function CashFlow() {
    const [releaseData, setReleaseData] = useState<releaseDataProps>()
    const { userId } = useStore()
    let [selectCategory, setSelectCategory] = useState<categoryType>([])

    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/cash-flows', releaseData)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        console.log(releaseData)
    }, [releaseData])

    useEffect(() => {
        loadDate()
        setReleaseData((date: any) => ({
            ...date,
            user_id: userId,
        }))
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
                    id="category_id"
                    value={releaseData?.category_id}
                    setState={setReleaseData}
                    values={selectCategory.map(({ title, _id }) => ({
                        value: _id,
                        label: title,
                    }))}
                />
            </S.WrapperSelect>
            <S.DataInputs>
                <InputText
                    placeholder={'Título'}
                    value={releaseData?.title}
                    setState={setReleaseData}
                    id="title"
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
                    value={monetaryMask(releaseData?.value)}
                    setState={setReleaseData}
                    id="value"
                    label="Valor"
                />
                <InputText
                    placeholder={'Data de vencimento'}
                    value={dateMask(releaseData?.dueDate)}
                    setState={setReleaseData}
                    id="dueDate"
                    label="Data de vencimento"
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
