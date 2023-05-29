import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4823e9;
    width: 300px;
    height: 100vh;
    strong {
        color: black;
        &:hover {
            color: white;
            cursor: pointer;
        }
    }
`
