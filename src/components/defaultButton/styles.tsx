import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
    h: string | undefined
}

export const Container = styled.button<ContainerProps>`
    height : ${({ h }) => (h ?? "100%")};
    width: 100%;
    background-color:#6A5ACD;
    border-radius: 5px;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    border: 1px solid #6A5ACD;
    `

export const Text = styled.span`
    color: white;
    font-size: 15px;
    font-weight: bold;
    `

export const Icon = styled(FontAwesomeIcon)`
    font-size:  15px;
    color: white;
    `