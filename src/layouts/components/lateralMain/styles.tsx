import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #181a1d;
    width: 300px;
    height: 100vh;
    grid-area: lateralMenu;
    strong {
        color: black;
        &:hover {
            color: white;
            cursor: pointer;
        }
    }
`
