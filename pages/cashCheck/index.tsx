import MainLayout from "@/src/layouts/mainLayout"
import * as S from '../../styles/cashCheck/'
import ConsultListByDate from "@/src/components/consultListByDate"

interface ICashCheck {
    _id: string
    title: string
    description?: string
    value: string
    dueDate: string
    type: boolean
    user_id: string
    category_id: {
        _id: string
        title: string
    }
    createdAt: Date
    updatedAt: Date
    __v: number
    paid: any
}

type CashCheckProps = {
    item: ICashCheck
}

export default function CashCheck({item,}: CashCheckProps) {

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