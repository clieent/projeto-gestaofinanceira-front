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
    padding-top: 30px;
`

export const WrapperButton = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

export const WrapperFoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 35px 0 0;
    gap: 15px;
    span {
        align-items: center;
        display: flex;
        gap: 10px;
        font-weight: 800;
        color: var(--color-branco1);

    }
    strong {
        font-weight: 800;
        text-align: center;

        color: var(--color-verde-claro1);
        &:hover {
            color: var(--color-verde-escuro2);
            cursor: pointer;
            text-decoration: underline;
        }
    }
`
