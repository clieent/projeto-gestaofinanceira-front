import { ReactElement, ReactNode, useContext } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
    return (
        <>
            <Head>
                <title>Gestão Financeira</title>
                <link rel="icon" href="logoSymbol.svg" />
            </Head>

            {getLayout(<Component {...pageProps} />)}
        </>
    )
}
