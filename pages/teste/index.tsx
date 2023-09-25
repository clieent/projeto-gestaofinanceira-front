import * as S from '@/styles/teste'
import MainLayout from '@/src/layouts/mainLayout'
import UploadFiles from '@/src/components/uploadFiles'


interface ITeste {
}

export default function Teste({}: ITeste) {
    

    return (
        <S.Container>
            <UploadFiles/>
        </S.Container>
    )
}

Teste.getLayout = function GetLayout(page: any) {
    return <MainLayout pageLayout={'PÁGINA TESTE'}>{page}</MainLayout>
}
