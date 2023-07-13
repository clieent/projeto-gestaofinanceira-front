import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import ImageLg from '../../../../public/clieent-rectangle@3x-2-1024x388.png'
import LogoClieent from '@/src/components/LogoClieent'

type HeaderAuthProps = {}

export default function HeaderAuth({}: HeaderAuthProps) {
    return (
        <S.Container>
            <LogoClieent
                type="rectangle"
                h={40}
                w={190}
                brandColor="#D4D4D4"
                textColor="#D4D4D4"
            />
        </S.Container>
    )
}
