import * as S from './styles'
import * as React from 'react'

type DefaultToggleProps = {
    ctaToggle: string
}

export default function DefaultToggle({ctaToggle, }: DefaultToggleProps) {
    const [alignment, setAlignment] = React.useState('web')

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        setAlignment(newAlignment)
    }

    return (
        <S.Container>
            <S.ButtonGroupToggle
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <S.ButtonToggle value="web">{ctaToggle}</S.ButtonToggle>
            </S.ButtonGroupToggle>
        </S.Container>
    )
}
