import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    background-color: #1c2026;
`

export const Ilustration = styled.div`
    width: 700px;
`

export const Content = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
    color: white !important;
    h3 {
        color: white;
        font-size: 30px;
        font-weight: 800;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
    }
    section {
        background-color: rgba(0, 0, 0, 0.4);
        min-height: 500px;
        min-width: 600px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        padding: 30px 0;
        input {
            background-color: #0a0b0d !important;
            color: white !important;
        }
        button {
            font-weight: 800;
            font-size: 20px;
            width: 500px;
            height: 50px;
            background-color: #008f8c;
            &:hover {
                background-color: #015958;
            }
        }
    }
`
