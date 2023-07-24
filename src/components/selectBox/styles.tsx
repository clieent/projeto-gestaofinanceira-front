import styled from 'styled-components'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

export const Container = styled.div`
    width: 100%;
    background-color: var(--color-preto2);
    border-color: var(--color-branco1);
    `

export const ChoicesBox = styled(Box)`
`

export const ChoicesFormControl = styled(FormControl)``

export const ChoicesInputLabel = styled(InputLabel)`
    color: #ccc !important;
    select {
        color: #ccc !important;
    }
    `

export const ChoicesSelect = styled(Select)`
    color: #ccc !important;
`

export const ChoicesMenuItem = styled(MenuItem)``
