import * as S from '@/styles/profilePage'
import MainLayout from '@/src/layouts/mainLayout'

interface IProfilePage {

}

export default function ProfilePage({}: IProfilePage) {

    return (
        <S.Container>
            <S.Content>
                <S.WrapperImage>
                </S.WrapperImage>
                <S.WrapperInputs>
                    
                </S.WrapperInputs>
                <S.WrapperInputs></S.WrapperInputs>
                <S.WrapperButton></S.WrapperButton>
            </S.Content>
        </S.Container>
    )
}

ProfilePage.getLayout = function GetLayout(page: any) {
    return <MainLayout pageLayout={'PERFIL'}>{page}</MainLayout>
}
