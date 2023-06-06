import React, { useState } from "react"
import MainLayout from "@/src/layouts/mainLayout"
import * as S from '../../styles/cashCheck/'
import DefaultButton from "@/src/components/defaultButton"
import SelectBox from "@/src/components/selectBox"

interface releaseDataProps {
    title: string
    date: string
    category: string
    description?: string
    value: any
    type: boolean
}


export default function CashCheck() {

    const [releaseData, setReleaseData] = useState<releaseDataProps>()

    const handleClick = (e: any) => {
        e.preventDefault()
        console.log('handleClick')
    }

    return (
        <S.Container>
            <h1>Consultar</h1>

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

                <SelectBox
                    name="Data"
                    id="type"
                    value={releaseData?.type}
                    setState={setReleaseData}
                    values={[
                        { value: false, label: 'Mês' },
                        { value: false, label: 'Ano' },
                        { value: false, label: 'Geral' },
                    ]}
                />
            </S.WrapperSelect>

            <S.WrapperButton>
                <DefaultButton onClick={handleClick} ctaButton={'Mostrar'} />
            </S.WrapperButton>

        </S.Container>
    )
}

CashCheck.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}