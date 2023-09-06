import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    showAlertMessage?: boolean
}

export const Container = styled.div`
    align-items: center;
    padding: 50px;
    h1 {
        padding-bottom: 50px;
        text-align: center;
        color: var(--color-branco2);
    }
`

export const Content = styled.div`
    display: grid;
    background-color: var(--color-preto3);
    border-radius: 8px;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const WrapperDisplayDebts = styled.div`
    grid-template-columns: 70% 1fr;
    display: grid;
    gap: 25px;
    padding: 30px;
    height: 600px;
`

export const DisplayDebts = styled.div`
    background-color: var(--color-preto5);
    padding: 20px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    h2 {
        font-weight: 800;
        font-size: 30px;
        padding: 30px 0px;
        text-align: center;
        color: var(--color-branco2);
    }

    h3 {
        font-weight: 600;
        font-size: 25px;
        padding: 30px 0px;
        text-align: center;
        color: var(--color-branco2);
    }

    overflow: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--color-preto3);
        border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-preto1);
    }
`

export const WrapperDisplayBalance = styled.div`
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    gap: 25px;
    padding: 30px;
    height: 500px;

    border-radius: 8px;
    h2 {
        padding: 30px 0px;
        text-align: center;
        color: var(--color-branco2);

    }
`

export const DisplayBalance = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 8px;
    background-color: var(--color-preto5);
    padding: 20px;
    h2 {
        padding: 30px 0px;
        text-align: center;
        color: var(--color-branco2);

    }
`

export const WrapperAlertBox = styled.div<ContainerProps>`
    visibility: ${({ showAlertMessage }) => (showAlertMessage ? 'visible' : 'hidden')};
    height: auto;
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    gap: 30px;
    display: flex;
    border: 3px solid;
    border-radius: 10px;
    color: var(--color-branco1);
    border-color: var(--color-verde-exclusivo);
    margin: 0px auto;
    position: absolute;
    bottom: 30px;
    padding: 15px;
    z-index: 1;
    background-color: var(--color-preto2);
    align-items: center;
    right: 30px;

`

export const AlertMessage = styled.div`
`

export const IconItem = styled(FontAwesomeIcon)<ContainerProps>`
    font-size: 25px;
    color: var(--color-branco1);
    margin: 20px;
`