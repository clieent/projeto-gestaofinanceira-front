import styled from "styled-components";

export const Container = styled.div `
    grid-area: content;
    background-color: #1C2026;
    
    section {
        background-color: rgba(0,0,0,0.4);
        display: grid;
        place-items: center;
        padding: 30px 0;

        button {
            font-weight: 800;
            font-size: 20px;
            width: 500px;
            height: 50px;
            background-color: #008F8C;
            &:hover{
                background-color: #015958;
            }
        }

        select {
            background-color:#0A0B0D !important;
            
        }

        input{
            background-color:#0A0B0D !important;
            color: white !important
        }
    }
`
