import React, { useEffect, useState } from "react";
import * as S from "../../../styles/auth/expiredSection"
import DefaultButton from "@/src/components/defaultButton";
import AuthLayout from "@/src/layouts/authLayout";
import { useRouter } from "next/router";

export default function ExpiredSection() {

    const [timer, setTimer] = useState(5)
    const router = useRouter()

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            router.push("/auth/login")
        }, 5000)

        const intervalTimer = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1)
        }, 1000)

        return () => {
            clearTimeout(redirectTimer)
            clearInterval(intervalTimer)
        }
    }, [])

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push("/auth/login")
    }

    //setTimeout(() => {router.push("/auth/login")}, 4000)
    //setInterval(() => {setTimer(() => (timer - 1))}, 1000)

    return (
        <S.Container>
            <S.Title>Sessão Expirada!!!</S.Title>
            <S.SubTitle>Redirecionando em {timer}</S.SubTitle>
            <S.Loading></S.Loading>
            <S.WrapperButton>
                <DefaultButton onClick={handleClick} ctaButton={"Voltar ao Login"} />
            </S.WrapperButton>
        </S.Container>
    )
}

ExpiredSection.getLayout = function GetLayout(page: any) {
    return <AuthLayout>{page}</AuthLayout>
}