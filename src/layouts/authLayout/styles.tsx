import styled from 'styled-components'

export const Container = styled.div`
    
`
export const Header = styled.nav`
    background-color: #8B7D7B;
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
        background-color: #FFDEAD;
        min-height: 70%;
        width: 600px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        padding: 30px 0;

    }
`

