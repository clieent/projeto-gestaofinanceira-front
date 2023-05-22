import styled from 'styled-components'

export const Container = styled.div`
    background-image: linear-gradient(to right, #000080, #A9A9A9);
`
export const Header = styled.header`
    
    background-color: #6041ed;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const Content = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    display: grid;
    place-items: center;
    
    section{
        background-color: #704894;
        min-height: 30%;
        min-width: 600px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        padding: 30px 0;
    }
`

