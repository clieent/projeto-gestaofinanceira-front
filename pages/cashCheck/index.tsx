import MainLayout from "@/src/layouts/mainLayout"
import * as S from '../../styles/cashCheck/'
import ConsultListByDate from "@/src/components/consultListByDate"

interface releaseDataProps {
    title: string
    date: string
    category: string
    description?: string
    value: any
    type: boolean
}


export default function CashCheck() {

    return (
        <S.Container>
            <h1>Consultar</h1>

            <S.WrapperDate>
                <ConsultListByDate />
            </S.WrapperDate>
        </S.Container>
    )
}

CashCheck.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}