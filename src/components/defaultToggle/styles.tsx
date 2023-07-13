import styled from "styled-components";
import ToggleButton from '@mui/material/ToggleButton'

type DefaultToggleProps = {
    status: boolean
}

export const Container = styled.div<DefaultToggleProps>`
    button {
        background-color: ${({status}) => (!status ? '#008f8c' : '#022928')};
        font-weight: 700;
        font-size: 15px;
        width: 100px;
        height: 40px;
        &:hover {
            background-color: var(--color-d);
            //background-color: #015958;
        }
        
        display: flex;
        justify-content: center;
    }
    `

export const ButtonToggle = styled(ToggleButton)`
`
