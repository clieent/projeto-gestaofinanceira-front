import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    color: #ccc;
    font-size: 40px;
`

export const SubTitle = styled.h2`
    color: #958f8f;
    padding-bottom: 25px;
`

export const WrapperButton = styled.div`
    padding-top: 15px;
    margin-top: 15px;
`

export const Loading = styled.div`
    animation: is-rotating 1s infinite;
    border: 6px solid #ccc;
    border-radius: 50%;
    border-top-color: #008f8c;
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`
