import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: #1c2026;
`

export const Ilustration = styled.div``

export const WrapperSection = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 480px;
    /* background-color: rgba(0, 0, 0, 0.4); */

    flex-direction: column;
    position: relative;
    margin-bottom: 50px;

    border-radius: 10px;
    padding: 30px 10px 30px 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    h3 {
        margin-top: 10px;
        color: white;
        font-size: 25px;
        font-weight: 800;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 8px;
        font-family: 'Inter', Sans-Serif;
    }
`

export const Content = styled.div`
    @media (max-width: 768px) {
        grid-template-columns: 0 100%;
    }
    margin: 0px;
    padding: 30px 10px 80px 10px;

    width: 100vw;
    display: grid;
    grid-template-columns: 50% 400px;
    place-items: center;
    color: white !important;
`
