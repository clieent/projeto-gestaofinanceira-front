import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DataInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 75px;
`

export const WrapperButton = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding-top: 77px;
`

export const WrapperFoot = styled.div`
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 15px 0 0;
    span {
        align-items: center;
        display: flex;
        gap: 10px;
        font-weight: 800;

        strong {
            font-weight: 800;

            color: var(--color-d);
            &:hover {
                color: var(--color-c);
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`
