import React from "react"
import MainLayout from "@/src/layouts/mainLayout"
import * as S from '../../styles/cashCheck/'

export default function CashCheck() {
    return (
        <S.Container>
            <h2>Consultar</h2>
        </S.Container>
    )
}

CashCheck.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}