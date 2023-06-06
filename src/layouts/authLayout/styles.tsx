import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    background-color: #1c2026;
`

export const Ilustration = styled.div``

export const Content = styled.div`
    @media (max-width: 768px) {
        grid-template-columns: 0 100%;
    }
    height: calc(100vh - 100px);
    overflow-y: hidden;
    width: 100vw;
    display: grid;
    grid-template-columns: 50% 50%;
    place-items: center;
    color: white !important;
    h3 {
        color: white;
        font-size: 30px;
        font-weight: 800;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 15px;
    }
    section {
        background-color: rgba(0, 0, 0, 0.4);
        min-height: 500px;
        width: 600px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        padding: 30px;
        /*         input {
            background-color: #0a0b0d !important;
            color: white !important;
        } */ //comentando esse trecho pois passei pro componente
    }
`
