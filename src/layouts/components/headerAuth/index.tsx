import React from "react";
import * as S from './styles'
import Image from 'next/image'
import ImageLg from '../../../../public/clieent-rectangle@3x-2-1024x388.png'

type HeaderAuthProps = {
}

export default function HeaderAuth({}: HeaderAuthProps) {
    return (
        <S.Container>
            <S.Logo>
            <Image src={ImageLg}/>
            </S.Logo>
        </S.Container>
    )
}