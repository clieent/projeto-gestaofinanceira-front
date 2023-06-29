import styled from 'styled-components'

type PagePros = {
    showMenu: boolean
}

export const Container = styled.div`
    height: 100vh;
    display: grid;
    width: 100vw;
    overflow: hidden;
    grid-template-columns: auto auto;
`
export const Page = styled.div<PagePros>`
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    background-color: #030105dc;
    article {
        width: ${({ showMenu }) =>
            showMenu ? 'calc(100vw - 200px)' : 'calc(100vw - 40px)'};
    }
`

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-width: 100%;
`
