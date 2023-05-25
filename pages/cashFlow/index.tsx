import React from 'react'
import MainLayout from '@/src/layouts/mainLayout'
import * as S from 'styled-components'

export default function CashFlow() {
    return (
        <>
            <h2>Fluxo de caixa:</h2>
        </>
    )
}

CashFlow.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}