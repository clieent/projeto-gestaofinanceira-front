import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type inputBoxProps = {
    type?: string
}

export const Container = styled.div``

export const InputTextField = styled(TextField)``

export const Icon = styled(FontAwesomeIcon)``

export const InputBox = styled(Box)<inputBoxProps>`
    display: flex;
    position: relative;
    > div > div > input {
        background-color: #f9f2f2;
        border-radius: 4px;
    }
`
