import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    grid-area: content;
    background-color: #1c2026;

    section {
        background-color: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        padding: 30px 0;
    }

    h1 {
        color: #ccc !important;
        text-align: center;
        margin-bottom: 15px;
        font-size: 30px;
        font-weight: 800;
        font-family: Arial, Helvetica, sans-serif;
    }
`
