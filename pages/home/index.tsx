import React from 'react'
import MainLayout from '@/src/layouts/mainLayout'

export default function Home() {
    return (
        <>
            <h2> Home </h2>
        </>
    )
}

Home.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
