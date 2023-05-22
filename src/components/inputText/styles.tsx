import styled from "styled-components";
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';

export const Container = styled.div`
    `

export const InputTextField = styled(TextField)`

`

export const InputBox = styled(Box)`
    > div > div > input {
        background-color: #f9f2f2;
        border-radius: 4px;
    }
`

