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
        background-color: var(--color-a);
        //background-color: #0a0b0d !important;
        color: var(--color-f);
    }
`

export const InputTextField = styled(TextField)`
    &::placeholder {}
    label {
        color: var(--color-f);
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
