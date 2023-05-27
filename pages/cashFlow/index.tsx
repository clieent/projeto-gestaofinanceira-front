import React, { useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/cashFlow'
import InputText from '../../src/components/inputText'
import SelectBox from '../../src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'

interface releaseDataProps {
    tag: string
    date: Date
    category: {}
    description?: string
    value: number
}
export default function CashFlow() {
    const [releaseData, setReleaseData] = useState<releaseDataProps>()

    const handleClick = (e: any) => {
        e.preventDefault()
        console.log('handleClick')
    }

    return (
        <S.Container>
            <S.WrapperSelect>
                <SelectBox
                    name="Categoria"
                    id="category"
                    value={releaseData?.category}
                    setState={setReleaseData}
                    values={[
                        //  Fazer função que busca no backend as categorias criadas pelo usuario
                        // Teste de funcionamento
                        { value: true, label: 'Saída' },
                        { value: false, label: 'Entrada' },
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
                        mask="R$"
                        
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
            <S.WrapperButton>
                <DefaultButton onClick={handleClick} ctaButton={'Mostrar Resultados'} />
            </S.WrapperButton>
        </S.Container>
    )
}

CashFlow.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
