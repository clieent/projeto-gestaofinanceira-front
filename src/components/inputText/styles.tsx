import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type inputBoxProps = {
    type?: string
}

export const Container = styled.div`
    max-width: 100%;
    min-width: 100%;
    input {
        background-color: var(--color-preto2);
        color: var(--color-branco1);
    }

    & label.Mui-focused {
        color: var(--color-branco2);
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: var(--color-cinza2);
            border-radius: 2px;
        }
    }
`

export const InputTextField = styled(TextField)`
    &::placeholder {}
    label {
        color: var(--color-branco1);
    }
`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
`

export const WrapperIcon = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    right: 20px;
`

export const InputBox = styled(Box)<inputBoxProps>`
    display: flex;
    position: relative;
`
