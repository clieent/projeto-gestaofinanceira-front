import styled from 'styled-components'

type ContainerProps = {
    create: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 2;
    padding: 15px 15px;
    gap: 5px;
`

export const DataInputs = styled.div`
    display: flex;
    flex-direction: column;
`

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 5px;
`
export const Content = styled.div<ContainerProps>`
width: ${({ create }) => (create ? 200 : 0)}px;
display: ${({ create }) => (create ? 'flex' : 'none')};
flex-direction: column;
place-items: center;
position: absolute;
`