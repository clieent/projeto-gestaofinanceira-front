import React from "react";
import * as S from './styles'
import { useRouter } from "next/router"; 

type LateralMenuProps = {
}

export default function LateralMenu({}: LateralMenuProps) {
    const router = useRouter()
    return (
        <S.Container>
            
            <strong onClick={()=>router.push('/home')}>Início</strong>
            <strong onClick={()=>router.push('/cashFlow')}>Caixa</strong>
            <strong onClick={()=>router.push('/categories')}>Cadastrar Categoria</strong>
         
        </S.Container>
    )
}