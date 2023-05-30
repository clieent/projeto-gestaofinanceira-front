import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #181a1d;
    min-width: auto;
    height: 100vh;
    grid-area: lateralMenu;
    font-size: 20px;
    gap: 5px;
    padding-top: 5px;
    strong {
        color: #c0bbbb;
        background-color: #111316;
        border: #767373 solid 1px;
        padding: 10px;
        &:hover {
            color: #ffffff;
            cursor: pointer;
        }
    }
`
