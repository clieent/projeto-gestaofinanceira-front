import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    padding-top: 50px;
    color: var(--color-branco1);
    font-size: 40px;
`

export const SubTitle = styled.h2`
    color: var(--color-cinza1);
    padding-top: 10px;
    margin-bottom: 80px;
`

export const WrapperButton = styled.div`
    padding-top: 77px;
    width: 70%;
`

export const Loading = styled.div`
    animation: is-rotating 1s infinite;
    border: 6px solid var(--color-branco1);
    border-radius: 50%;
    border-top-color: var(--color-verde-claro1);
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`
