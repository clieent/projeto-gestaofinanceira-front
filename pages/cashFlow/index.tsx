import React, { useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/cashFlow'
import InputText from '../../src/components/inputText'
import SelectBox from '../../src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'
import Api from '../../src/api/api'

interface releaseDataProps {
    tag: string
    date: Date
    category: string
    description?: string
    value: number
    type: boolean
}
export default function CashFlow() {
    const [releaseData, setReleaseData] = useState<releaseDataProps>()

    const handleClick = (e: any) => {
        e.preventDefault()
        console.log('handleClick')
    }

    const selectCategory = Api.get('/categories'/*, user_id*/)

    return (
        <S.Container>
            <S.WrapperSelect>
                <SelectBox
                name="Categoria"
                id="category"
                value={releaseData?.category}
                setState={setReleaseData}
                values={[
                ]}
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
