import {
    duotone,
    light,
    solid,
} from '@fortawesome/fontawesome-svg-core/import.macro'
import * as S from './styles'
import { useEffect, useState } from 'react'

interface IConsultListByDate {
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
    createdAt: Date
    updatedAt: Date
    __v: number
    paid: any
}

type ItemListProps = {
    item: IConsultListByDate
    isSelected: boolean
    setSelectedBoxes: any
    selectedBoxes: any
}

export default function ItemList({
    item,
    isSelected,
    setSelectedBoxes,
    selectedBoxes,
}: ItemListProps) {
    const date = item.createdAt.toString().split('T')[0]
    const currentDay = date.split('-')[2]
    const currentMonth = date.split('-')[1]
    const [showDetails, setShowDetails] = useState(true)

    const handleInfos = () => {
        setShowDetails((prev) => !prev)
    }

    const handleCheck = (itemId: string) => {
        if (isSelected) {
            let updatedCheckboxList = selectedBoxes.filter(
                (checkboxId: string) => checkboxId != itemId
            )
            selectedBoxes = updatedCheckboxList
            setSelectedBoxes(updatedCheckboxList)
        } else {
            let updatedCheckboxList = [...selectedBoxes, itemId]
            selectedBoxes = updatedCheckboxList
            setSelectedBoxes(updatedCheckboxList)
        }
    }

    console.log(handleInfos)

    return (
        <S.Container showDetails={showDetails}>
            {item?.type === false ? (
                <>
                    <S.IconItem
                        icon={duotone('arrow-up-wide-short')}
                        value={item?.type}
                        style={{"--fa-primary-color": 'var(--color-verde-exclusivo)', "--fa-secondary-color": 'var(--color-cinza1)',}}
                        />
                </>
            ) : (
                <>
                    <S.IconItem
                        icon={duotone('arrow-down-wide-short')}
                        style={{"--fa-primary-color": 'var(--color-vermelho-exclusivo)', "--fa-secondary-color": 'var(--color-cinza1)'}}
                        value={item?.type}
                    />
                </>
            )}
            <S.Item showDetails={showDetails}>
                {showDetails === true ? (
                    <>
                        <S.WrapperIcon>
                            <S.Icon
                                icon={solid('plus')}
                                title="Mostrar Mais"
                                onClick={handleInfos}
                            />
                            {item.paid == false ? (
                                <>
                                    <S.Icon
                                        icon={
                                            isSelected == true
                                                ? light('square-check')
                                                : light('square')
                                        }
                                        checked={isSelected}
                                        onClick={() => {
                                            handleCheck(item._id)
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <S.IconItem icon={solid('badge-check')} />
                                </>
                            )}
                        </S.WrapperIcon>
                        <S.TypeColor
                            showDetails={showDetails}
                            value={item.paid}
                        />
                        <S.WrapperData showDetails={showDetails}>
                            <span>
                                {item.title.substring(15)
                                    ? `${item.title.substring(0, 15)}...`
                                    : item.title}
                            </span>
                        </S.WrapperData>
                        <S.WrapperData showDetails={showDetails}>
                            <span>
                                {!item.description || item.description == ''
                                    ? '"Sem descrição..."'
                                    : item.description.substring(15)
                                    ? `${item.description.substring(0, 15)}...`
                                    : item.description}
                            </span>
                        </S.WrapperData>
                    </>
                ) : (
                    <>
                        <S.WrapperIcon>
                            <S.Icon
                                icon={solid('minus')}
                                title="Mostrar Menos"
                                onClick={handleInfos}
                            />
                            {item.paid == false ? (
                                <>
                                    <S.Icon
                                        icon={
                                            isSelected == true
                                                ? light('square-check')
                                                : light('square')
                                        }
                                        checked={isSelected}
                                        onClick={() => {
                                            handleCheck(item._id)
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <S.IconItem icon={solid('badge-check')} />
                                </>
                            )}
                        </S.WrapperIcon>
                        <S.TypeColor
                            showDetails={showDetails}
                            value={item.paid}
                        />
                        <S.WrapperData showDetails={showDetails}>
                            <span>{item.title}</span>
                        </S.WrapperData>
                        <S.WrapperData showDetails={showDetails}>
                            <span>
                                {!item.description || item.description == ''
                                    ? '"Sem descrição..."'
                                    : item.description}
                            </span>
                        </S.WrapperData>
                        <S.Day>
                            <span>
                                Criado no dia: {currentDay}/{currentMonth}
                            </span>
                        </S.Day>
                    </>
                )}

                <S.WrapperDataFixed>
                    <span>{item.category_id.title}</span>
                </S.WrapperDataFixed>
                <S.WrapperDataFixed>
                    <span>{item.dueDate}</span>
                </S.WrapperDataFixed>
                <S.WrapperDataFixed>
                    <span>{item.value}</span>
                </S.WrapperDataFixed>
            </S.Item>
        </S.Container>
    )
}
