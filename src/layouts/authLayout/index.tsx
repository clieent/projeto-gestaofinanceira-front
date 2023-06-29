import React from 'react'
import * as S from './styles'
import HeaderAuth from '../components/headerAuth'
import Image from 'next/image'
import imageBg from '../../../public/pngtree-gradient-fingerprint-unlock-login-computer-png-image_5044947.png'

type AuthLayoutProps = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <S.Container>
            <HeaderAuth/>
            <S.Content>
                <S.Ilustration>
                    <Image src={imageBg}/>
                </S.Ilustration>
                <section>
                    
                    {children}</section>
            </S.Content>
        </S.Container>
    )
}
