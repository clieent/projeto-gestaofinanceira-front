import styled from 'styled-components'

type PageProps = {
    showMenu: boolean
}

export const Container = styled.div`
    height: 100vh;
    display: flex;
    width: 100vw;
    overflow: hidden;
`

export const WrapperLateralMain = styled.div<PageProps>`
    display: flex;
    width: ${({ showMenu }) => (showMenu ? 200 : 60)}px;
    flex-direction: column;
    background-color: var(--color-preto1);
    height: 100vh;
    font-size: 16px;
    position: relative;
    transition-duration: 500ms;
`

export const Page = styled.div<PageProps>`
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    background-color: var(--color-preto4);
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
