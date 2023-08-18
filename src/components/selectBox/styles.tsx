import styled from 'styled-components'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

export const Container = styled.div`
    width: 100%;
    `

export const ChoicesBox = styled(Box)`
    `

export const ChoicesFormControl = styled(FormControl)`
    & label.Mui-focused {
        color: var(--color-branco2);
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: transparent;
            border-radius: 2px;
        }
    }
    `

export const ChoicesInputLabel = styled(InputLabel)`
    color: var(--color-branco2);
    `

export const ChoicesSelect = styled(Select)`
    color: var(--color-branco2);
    border: 2px solid var(--color-cinza2);
    background-color: var(--color-preto2);
    `

export const ChoicesMenuItem = styled(MenuItem)``
