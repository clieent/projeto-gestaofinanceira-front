import React, { useEffect, useState } from 'react'
import MainLayout from '@/src/layouts/mainLayout'
import * as S from '../../styles/home'
import api from '@/src/config/api/api'
import useStore from '@/src/zustand/store'
import ReducedItemList from '@/src/components/consultListByDate/components/ItemList/ReducedItemList'
import { duotone, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import OverdueItemList from '@/src/components/consultListByDate/components/ItemList/OverdueItemList'
import GraphicBalance from '@/src/components/graphicBalance'
import Image from 'next/image'

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
    paid: boolean
}

type HomeProps = {
    item: ICashFlow
}

export default function Home({ item }: HomeProps) {
    const [cashFlow, setCashFlow] = useState<ICashFlow[]>()
    const userId = useStore((value) => value.userId)
    const [showAlertMessage, setShowAlertMessage] = useState(false)
    const [timer, setTimer] = useState(3)
    const [filteredReducedItems, setFilteredReducedItems] = useState<any>([])
    const [filteredOverdueItems, setFilteredOverdueItems] = useState<any>([])
    const [atualDate, setAtualDate] = useState({ date: '', maskDate: '' })

    const getCashFlow = async () => {
        await api
            .get(`/cashFlows/${userId}/users`)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    setCashFlow(response.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getCashFlow()
    }, [userId])

    function handleClickButton(id: string) {
        api.patch(`cashFlows/${userId}`, [id])
            .then((response) => {
                console.log(response)
                getCashFlow()
                setShowAlertMessage(true)
            })
            .catch((err) => console.log(err))
    }

    function showReducedItems(item: ICashFlow, index: number) {
        return (
            <ReducedItemList
                item={item}
                key={index}
                handleSubmit={handleClickButton}
            />
        )
    }

    function showOverdueItems(item: ICashFlow, index: number) {
        return (
            <OverdueItemList
                item={item}
                key={index}
                handleSubmit={handleClickButton}
            />
        )
    }

    useEffect(() => {
        if (showAlertMessage) {
            const closeMessageTimer = setTimeout(() => {
                setShowAlertMessage(false)
            }, 3000)

            const intervalTimer = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1)
            }, 1000)

            if (timer == 0) {
                clearInterval(closeMessageTimer)
                clearInterval(intervalTimer)
            }

            return () => {
                clearTimeout(closeMessageTimer)
                clearInterval(intervalTimer)
                setTimer(3)
            }
        }
    }, [showAlertMessage])

    const filterReducedItems = () => {
        const limitDate = new Date().getTime() + 172800000
        setFilteredReducedItems(
            (cashFlow ?? []).filter((item: any) => {
                const itemDueDate = new Date(
                    item.dueDate.split('/').reverse()
                ).getTime()
                const today = new Date().getTime() - 86400000
                if (!item.paid) {
                    if (limitDate > itemDueDate && itemDueDate > today) {
                        return item
                    }
                }
            })
        )
    }

    useEffect(() => {
        filterReducedItems()
    }, [cashFlow])

    const filterOverdueItems = () => {
        const limitDate = new Date().getTime() - 86400000
        setFilteredOverdueItems(
            (cashFlow ?? []).filter((item: any) => {
                const itemDueDate = new Date(
                    item.dueDate.split('/').reverse()
                ).getTime()
                const today = new Date().getTime()

                if (!item.paid) {
                    if (limitDate > itemDueDate && itemDueDate < today) {
                        return item
                    }
                }
            })
        )
    }

    useEffect(() => {
        filterOverdueItems()
    }, [cashFlow])

    const initialValue = () => {
        const currentDate = new Date()
        setAtualDate((prev) => ({
            ...prev,
            maskDate: currentDate.toLocaleDateString('pt-BR', {}),
            date: currentDate.toString(),
        }))
    }

    if (!atualDate.date && userId) {
        initialValue()
    }

    let sumTypeFalse = 0
    let sumTypeTrue = 0

    if (cashFlow) {
        cashFlow.forEach((cashFlowItem) => {
            const monthDueDate = cashFlowItem.dueDate.split('/')[1]
            const yearDueDate = cashFlowItem.dueDate.split('/')[2]
            const monthAtualDate = atualDate.maskDate.split('/')[1]
            const yearAtualDate = atualDate.maskDate.split('/')[2]

            if (
                monthAtualDate == monthDueDate &&
                yearAtualDate == yearDueDate
            ) {
                if (cashFlowItem.type === true) {
                    sumTypeFalse += parseFloat(cashFlowItem.value)
                } else {
                    sumTypeTrue += parseFloat(cashFlowItem.value)
                }
            }
        })
    }

    return (
        <S.Container>
            <h2> Bem vindo! </h2>
            <S.Content>
                <S.WrapperDisplayDebts>
                    <S.DisplayDebts>
                        <h2>ITENS A SEREM PAGOS / COBRADOS</h2>
                        {filteredReducedItems.length > 0 ? null : (
                            <h2>Não há itens</h2>
                        )}
                        {filteredReducedItems?.map(
                            (item: ICashFlow, index: number) => {
                                return showReducedItems(item, index)
                            }
                        )}
                    </S.DisplayDebts>
                    <S.DisplayDebts>
                        <h2>ITENS COM ATRASO</h2>
                        {filteredOverdueItems.length > 0 ? null : (
                            <h2>Não há itens</h2>
                        )}
                        {filteredOverdueItems?.map(
                            (item: ICashFlow, index: number) => {
                                return showOverdueItems(item, index)
                            }
                        )}
                    </S.DisplayDebts>
                </S.WrapperDisplayDebts>

                <S.WrapperDisplayBalance>
                    <S.DisplayBalance>
                        <h2>ENTRADAS</h2>
                        <S.WrapperIcon>
                            <S.Icon
                                icon={duotone('arrow-up-right-dots')}
                                style={{
                                    '--fa-primary-color': '#00cb62',
                                    '--fa-secondary-color': '#b1b1b1',
                                }}
                            />
                            <h2>
                                Você teve um total de: R$
                                <strong>{sumTypeTrue}</strong>
                            </h2>
                        </S.WrapperIcon>
                    </S.DisplayBalance>

                    <S.DisplayGraphicBalance>
                        <h2>BALANÇO DE VENDAS</h2>
                        <GraphicBalance />
                    </S.DisplayGraphicBalance>

                    <S.DisplayBalance>
                        <h2>SAÍDAS</h2>
                        <S.WrapperIcon>
                            <S.Icon
                                icon={duotone('arrow-up-right-dots')}
                                flip="both"
                                style={{
                                    '--fa-primary-color': '#d64950',
                                    '--fa-secondary-color': '#b1b1b1',
                                }}
                            />
                            <h2>
                                Você teve um total de: R$
                                <strong>{sumTypeFalse}</strong>
                            </h2>
                        </S.WrapperIcon>
                    </S.DisplayBalance>
                </S.WrapperDisplayBalance>
                <S.WrapperAlertBox showAlertMessage={showAlertMessage}>
                    <S.IconItem
                        icon={solid('circle-check')}
                        style={{ color: '#00cb62' }}
                    />
                    <S.AlertMessage>
                        Dívida quitada com <strong>SUCESSO</strong>
                    </S.AlertMessage>
                </S.WrapperAlertBox>
            </S.Content>
        </S.Container>
    )
}

Home.getLayout = function GetLayout(page: any) {
    return <MainLayout pageLayout={'INÍCIO'}>{page}</MainLayout>
}
