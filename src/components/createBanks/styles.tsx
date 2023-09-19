import styled from 'styled-components'

type ContainerProps = {
    create: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 450px;
    display: ${({ create }) => (create ? 'flex' : 'none')};
    flex-direction: column;
`

export const DataInputs = styled.div`
    `

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    `
export const Content = styled.div<ContainerProps>`
    display: grid;
    gap: 10px;

`