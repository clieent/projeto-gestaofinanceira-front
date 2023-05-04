import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContenerProps = {
    h: string | undefined
}

export const Contener = styled.button<ContenerProps>`
    height : ${({ h }) => (h ?? "100%")};
    width: 100%;
    background-color: red;
    `

export const Text = styled.span`

    `

export const Icon = styled(FontAwesomeIcon)`
    font-size:  20px;
`