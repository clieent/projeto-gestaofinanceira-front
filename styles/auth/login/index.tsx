import styled from "styled-components";

export const Container = styled.div`
    
   display: flex; 
   flex-direction : column ;
   gap: 5px;
`

export const DataInputs = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const WrapperButton = styled.div`
    display: grid;
    place-items: center;
    
    `

export const WrapperFoot = styled.div`
        display: flex;
        justify-content: flex-end;
        font-family: Arial, Helvetica, sans-serif;
        padding-top: 5px;
        span{
            display: flex;
            gap:5px;

            strong{
                font-weight: 800;

                
                color: #015958;
            &:hover{
                color: #008F8C;
                cursor: pointer;
                text-decoration: underline;
            }

            }
        }
    `