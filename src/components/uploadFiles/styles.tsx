import styled from "styled-components";

export const Container = styled.div`
    max-width: 40px;
    max-width: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Content = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    align-items: center;
    justify-content: center;
    border: 2px solid red;
    cursor: pointer;
    text-align: center;
    img{
        max-width: 300px;
        max-height: 300px;
        object-fit: cover;
    }
`

export const Button = styled.button`
    background-color: red;
    padding: 3px;
    width: 150px;
    height: 50px;
    justify-self: center;
`