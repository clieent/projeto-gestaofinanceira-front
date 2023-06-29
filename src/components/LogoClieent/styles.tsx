import styled from 'styled-components'

interface Props {
    brandColor: string | undefined
    textColor: string | undefined
}

export const Container = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    .primary {
        fill: ${(props) => props.brandColor ?? 'var(--color-primary)'};
    }
    .secundary {
        fill: ${(props) => props.textColor ?? 'var(--color-text-secundary)'};
    }
`
