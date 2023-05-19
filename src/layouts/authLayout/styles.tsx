import styled from 'styled-components'

export const Container = styled.div`
    background-image: linear-gradient(to right, #000080, #A9A9A9);
`
export const Header = styled.nav`
    background-color: #6041ed;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    `

export const Content = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    display: grid;
    place-items: center;
    
    section{
        position: fixed;
        background-color: #704894;
        min-height: 40%;
        width: 600px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        padding: 30px 0;
    }
`

