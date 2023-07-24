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
        background-color: var(--color-verde-claro1);
        &:hover {
            background-color: var(--color-verde-escuro2);
        }

        display: flex;
        justify-content: center;
    }
`

export const ClickStack = styled(Stack)``

export const ClickButton = styled(Button)``
