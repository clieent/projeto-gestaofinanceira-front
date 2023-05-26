import React, { useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/cashFlow'
import InputText from '../../src/components/inputText'
import SelectBox from '../../src/components/selectBox'

interface releaseDataProps {
    tag: string
    date: Date
    category: {}
    description?: string
    value: number
}
export default function CashFlow() {
    const [releaseData, setReleaseData] = useState<releaseDataProps>()

    return (
        <S.Container>
            <S.DataInputs>
                <S.Table>
                    <thead>
                        <tr>
                            <S.TableHeadColumn>Título</S.TableHeadColumn>
                            <S.TableHeadColumn>Categoria</S.TableHeadColumn>
                            <S.TableHeadColumn>Descrição</S.TableHeadColumn>
                            <S.TableHeadColumn>Valor</S.TableHeadColumn>
                            <S.TableHeadColumn>Data</S.TableHeadColumn>
                            <InputText
                                placeholder={'Título'}
                                value={releaseData?.tag}
                                setState={setReleaseData}
                                id="tag"
                                label="Título"
                            />
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
                            <InputText
                                placeholder={'Descrição'}
                                value={releaseData?.description}
                                setState={setReleaseData}
                                id="description"
                                label="Descrção"
                            />
                            <InputText
                                placeholder={'Valor'}
                                value={releaseData?.value}
                                setState={setReleaseData}
                                id="value"
                                label="Valor"
                            />
                            <InputText
                                placeholder={'Data de lançamento'}
                                value={releaseData?.date}
                                setState={setReleaseData}
                                id="date"
                                label="Data de lançamento"
                            />
                        </tr>
                    </thead>
                </S.Table>
            </S.DataInputs>
        </S.Container>
    )
}

CashFlow.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
