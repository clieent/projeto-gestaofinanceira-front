import React from 'react'
import MainLayout from '@/src/layouts/mainLayout'
import HeaderMain from '@/src/layouts/components/headerMain'

export default function Home() {
    return (
        <>
            <HeaderMain />
            <h1> Início </h1>
        </>
    )
}

Home.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
