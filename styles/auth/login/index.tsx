import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const DataInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const WrapperButton = styled.div`
    display: grid;
    width: 100%;
    place-items: center;
`

export const WrapperFoot = styled.div`
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 60px 0 0;
    span {
        align-items: center;
        display: flex;
        gap: 10px;
        font-weight: 800;

        strong {
            font-weight: 800;

            color: #015958;
            &:hover {
                color: #008f8c;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`
