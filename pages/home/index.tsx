import React from 'react'
import MainLayout from '@/src/layouts/mainLayout'
import validateToken from '@/src/util/validateCookie'
import { getCookie } from 'cookies-next'


export default function Home() {

    const token = getCookie('AccessToken')

    async function testarToken() {
        const aux = token ?? null
        if(aux) {
            const result = await validateToken(aux?.toString())
            console.log(result)
        }
    }

    return (
        <><h2> Home </h2><button onClick={testarToken}>Testar botão</button></>
    )
}

Home.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}