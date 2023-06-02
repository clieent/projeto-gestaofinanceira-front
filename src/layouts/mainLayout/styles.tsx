import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 100px 1fr;
    grid-template-columns: 250px 1fr;
    grid-template-areas: "headerMain headerMain"
    "lateralMenu content";
    `

