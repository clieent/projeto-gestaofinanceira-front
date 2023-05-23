import React from "react";
import * as S from './styles'
import DefaultButton from "@/src/components/defaultButton";
import { useRouter } from "next/router";

type HeaderMainProps = {
}

export default function HeaderMain({}: HeaderMainProps) {

    const router = useRouter()


    const handleClick = () => {
        router.push('/auth/login')
    }

    return (
        <S.Container>
            <div>
            <S.Logo>Logo</S.Logo>
            <S.WrapperButton>
                <DefaultButton onClick={handleClick} ctaButton="Sair" />
            </S.WrapperButton>
            </div>
        </S.Container>
    )
}