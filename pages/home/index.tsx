import React from 'react'
import MainLayout from '@/src/layouts/mainLayout'
import validateToken from '@/src/util/validateCookie'
import { getCookie } from 'cookies-next'


export default function Home() {


    return (
        <><h2> Home </h2><button onClick={testarToken}>Testar botão</button></>
    )
}

Home.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}