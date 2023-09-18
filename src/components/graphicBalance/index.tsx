import { useEffect, useState } from 'react'
import * as S from './styles'
import dynamic from 'next/dynamic'
import api from '@/src/config/api/api'
import useStore from '@/src/zustand/store'

interface ICashFlow {
    value: string
    type: boolean
    dueDate: string
}

type GraphicBalanceProps = {
    item?: ICashFlow
}

export default function GraphicBalance({ item }: GraphicBalanceProps) {
    const userId = useStore((value) => value.userId)
    const [cashFlow, setCashFlow] = useState<ICashFlow[]>([])
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

    const GraphicBalance = dynamic(
        async () => {
            const value = await Promise.all([import('react-apexcharts')])
            return value[0]
        },
        { ssr: false }
    )

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

    const series: number[] = [sumTypeTrue, sumTypeFalse]

    const options: any = {
        colors: [
            'var(--color-verde-exclusivo)',
            'var(--color-vermelho-exclusivo)',
        ],
        labels: ['ENTRADAS', 'SAÍDAS'],
        legend: {
            show: true,
            chart: {
                width: 400,
            },
            fontSize: '14px',
            fontWeight: 400,
            labels: {
                colors: '#ccc',
            },
        },
    }

    return (
        <S.Container>
            <GraphicBalance
                id="chartId"
                options={options}
                series={series}
                type="pie"
            />
        </S.Container>
    )
}
