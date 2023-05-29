import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type inputBoxProps = {
    type?: string
}

export const Container = styled.div`
`

export const InputTextField = styled(TextField)`
color: white!important;
&::placeholder{
    color: white !important;
}
label{
    color: white;
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
    > div > div > input {
        background-color: #f9f2f2;
        border-radius: 4px;
    }
`
