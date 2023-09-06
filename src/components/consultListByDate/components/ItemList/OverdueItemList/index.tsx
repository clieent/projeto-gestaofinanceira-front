import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro'
import * as S from './styles'
import DefaultButton from '@/src/components/defaultButton'
import { useState } from 'react'
import useStore from '@/src/zustand/store'

interface ICashFlow {
    _id: string
    title: string
    description?: string
    value: string
    dueDate: string
    type: boolean
    user_id: string
    category_id: {
        _id: string
        title: string
    }
    banks_id: {
        _id: string
        title: string
    }
    createdAt: Date
    updatedAt: Date
    __v: number
    paid: any
}

type OverdueItemListProps = {
    item: ICashFlow
    handleSubmit: (x: string) => void
}

export default function OverdueItemList({
    item,
    handleSubmit,
}: OverdueItemListProps) {
    const [atualDate, setAtualDate] = useState({ date: '', maskDate: '' })
    const userId = useStore((value) => value.userId)

    const initialValue = () => {
        const currentDate = new Date()

        setAtualDate((prev: any) => ({
            ...prev,
            maskDate: currentDate.toLocaleDateString('pt-BR', {}),
            date: currentDate.toString(),
        }))
    }

    if (!atualDate.date && userId) {
        initialValue()
    }

    return (
        <S.Container>
                {item?.type === false ? (
                    <>
                        <S.IconItem
                            icon={duotone('arrow-up-wide-short')}
                            value={item?.type}
                            style={{
                                '--fa-primary-color':
                                    'var(--color-verde-exclusivo)',
                                '--fa-secondary-color': 'var(--color-cinza1)',
                            }}
                        />
                    </>
                ) : (
                    <>
                        <S.IconItem
                            icon={duotone('arrow-down-wide-short')}
                            style={{
                                '--fa-primary-color':
                                    'var(--color-vermelho-exclusivo)',
                                '--fa-secondary-color': 'var(--color-cinza1)',
                            }}
                            value={item?.type}
                        />
                    </>
                )}
                <S.Item>
                    <S.WrapperData>
                        <h4>Título</h4>
                        <span>{item.title}</span>
                    </S.WrapperData>
                    <S.WrapperData>
                        <h4>Vencimento</h4>
                        <span>{item.dueDate}</span>
                    </S.WrapperData>
                </S.Item>
                <S.Item>
                    <S.WrapperData>
                        <h4>Valor</h4>
                        <span>R${item.value}</span>
                    </S.WrapperData>

                    <S.WrapperButton>
                        <DefaultButton
                            onClick={() => {
                                handleSubmit(item._id)
                            }}
                            ctaButton={'$'}
                        />
                    </S.WrapperButton>
                </S.Item>
        </S.Container>
    )
}
