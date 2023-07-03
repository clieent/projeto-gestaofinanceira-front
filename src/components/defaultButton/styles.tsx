import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export const Container = styled.div`
    width: 100%;
    button {
        font-weight: 800;
        font-size: 20px;
        width: 100%;
        height: 50px;
        background-color: #008f8c;
        &:hover {
            background-color: #015958;
        }

        display: flex;
        justify-content: center;
    }
`

export const ClickStack = styled(Stack)``

export const ClickButton = styled(Button)``
