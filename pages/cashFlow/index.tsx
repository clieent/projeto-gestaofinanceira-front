import React, { useEffect, useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/cashFlow'
import InputText from '../../src/components/inputText'
import SelectBox from '../../src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'
import api from '../../src/config/api/api'
import useStore from '../../src/zustand/store'
import dateMask from '@/src/util/masks/dateMask'
import monetaryMask from '@/src/util/masks/monetaryMask'
import { useRouter } from 'next/router'
import { light, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface releaseDataProps {
    title: string
    dueDate: string
    category_id: string
    banks_id: string
    description?: string
    value: number | any
    type: boolean
    user_id: string
    paid: boolean
    installment?: number | any
}

type categoryType = {
    title: string
    _id: string
}[]

type banksType = {
    title: string
    _id: string
}[]

export default function CashFlow() {
    const [releaseData, setReleaseData] = useState<releaseDataProps>()
    const { userId } = useStore()
    const [selectCategory, setSelectCategory] = useState<categoryType>([])
    const [selectBanks, setSelectBanks] = useState<banksType>([])
    const [showInstallments, setShowInstallments] = useState(false)
    const [checkUncheck, setCheckUncheck] = useState(false)
    const [timer, setTimer] = useState(3)
    const [showAlertMessage, setShowAlertMessage] = useState(false)

    function handleCalculateInstallment(installments: number) {
        const calculateInstallment =
            parseFloat(releaseData?.value) / installments
        setReleaseData((prevReleaseData: any) => ({
            ...prevReleaseData,
            value: calculateInstallment.toFixed(2).toString(),
            installment: installments,
        }))

        return calculateInstallment
    }

    const router = useRouter()
    const handleClick = (e: any) => {
        e.preventDefault()
        setShowAlertMessage(true)
        let installments = releaseData?.installment
            ? parseInt(releaseData?.installment)
            : 1
        handleCalculateInstallment(installments)
        api.post('/cashFlows', { ...releaseData, installment: installments })
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        console.log(releaseData)
    }, [releaseData])

    async function loadDateCategories() {
        const { data } = await api.get<categoryType>('/categories', {
            params: { userId },
        })
        setSelectCategory(data)
    }

    useEffect(() => {
        loadDateCategories()
        setReleaseData((date: any) => ({
            ...date,
            user_id: userId,
        }))
    }, [])

    async function loadDateBanks() {
        const { data } = await api.get<banksType>('/banks', {
            params: { userId },
        })
        setSelectBanks(data)
    }

    useEffect(() => {
        loadDateBanks()
        setReleaseData((date: any) => ({
            ...date,
            user_id: userId,
        }))
    }, [])

    const handleShowInput = () => {
        setShowInstallments((prev) => !prev)
        setCheckUncheck((prev) => !prev)
        if (!showInstallments) {
            setReleaseData((prev: any) => ({
                ...prev,
                installment: '',
            }))
        }
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
                router.push('/cashCheck')
            }
        }
    }, [showAlertMessage])

    return (
        <S.Container>
            <S.WrapperRegister>
                <S.WrapperSelect>
                    <SelectBox
                        title_name="Categoria"
                        id="category_id"
                        value={releaseData?.category_id}
                        setState={setReleaseData}
                        values={selectCategory.map(({ title, _id }) => ({
                            value: _id,
                            label: title,
                        }))}
                    />

                    <SelectBox
                        title_name="Banco"
                        id="banks_id"
                        value={releaseData?.banks_id}
                        setState={setReleaseData}
                        values={selectBanks.map(({ title, _id }) => ({
                            value: _id,
                            label: title,
                        }))}
                    />

                    <SelectBox
                        title_name="Tipo"
                        id="type"
                        value={releaseData?.type}
                        setState={setReleaseData}
                        values={[
                            { value: true, label: 'Saída' },
                            { value: false, label: 'Entrada' },
                        ]}
                    />
                </S.WrapperSelect>
                <S.DataInputs>
                    <InputText
                        placeholder={'Título'}
                        value={releaseData?.title}
                        setState={setReleaseData}
                        id="title"
                        label="Título"
                    />
                    <InputText
                        placeholder={'Descrição'}
                        value={releaseData?.description}
                        setState={setReleaseData}
                        id="description"
                        label="Descrição"
                    />
                    <InputText
                        placeholder={'Data de vencimento'}
                        value={dateMask(releaseData?.dueDate)}
                        setState={setReleaseData}
                        id="dueDate"
                        label="Data de vencimento"
                    />
                    <InputText
                        placeholder={'R$0,00'}
                        value={releaseData?.value}
                        setState={setReleaseData}
                        id="value"
                        label="Valor"
                    />
                </S.DataInputs>

                <S.WrapperIcon>
                    <S.Icon
                        icon={
                            checkUncheck
                                ? light('square-check')
                                : light('square')
                        }
                        onClick={() => {
                            handleShowInput()
                        }}
                    />
                    <h4>PARCELAR</h4>

                    <S.DataInputInstallment
                        showInstallmentsInfo={showInstallments}
                    >
                        <InputText
                            placeholder={'Quantidade'}
                            value={releaseData?.installment}
                            setState={setReleaseData}
                            id="installment"
                            label="Quantas vezes"
                            type={'number'}
                        />
                    </S.DataInputInstallment>
                </S.WrapperIcon>
                <S.WrapperButton>
                    <DefaultButton onClick={handleClick} ctaButton={'Lançar'} />
                </S.WrapperButton>
            </S.WrapperRegister>
            <S.WrapperAlertBox showAlertMessage={showAlertMessage}>
                <S.IconItem
                    icon={solid('circle-check')}
                    style={{ color: '#00cb62' }}
                />
                <S.AlertMessage>
                    Lançamento realizado com <strong>SUCESSO</strong>
                </S.AlertMessage>
            </S.WrapperAlertBox>
        </S.Container>
    )
}

CashFlow.getLayout = function GetLayout(page: any) {
    return <MainLayout pageLayout={'NOVO LANÇAMENTO'}>{page}</MainLayout>
}
