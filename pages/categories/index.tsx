import { useEffect, useRef, useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/categories'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/config/api/api'
import useStore from '../../src/zustand/store'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import CreateCategories from '../../src/components/createCategories'

type categoryType = {
    title: string
    _id: string
}[]

interface ICategories {
    title: string
}

export default function Categories() {
    const { userId } = useStore()
    const [selectCategory, setSelectCategory] = useState<categoryType>([])
    const [create, setCreate] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean[]>([])
    const [trash, setTrash] = useState<boolean[]>([])
    const [update, setUpdate] = useState<ICategories>()
    const [refresh, setRefresh] = useState<boolean>(false)
    const inputRefs = useRef<(HTMLInputElement | any)[]>([])
    

    function handleClickDelete(id: string) {
        api.delete(`/categories/${id}`)
            .then((reponse) => {
                loadDate()
                console.log(reponse.status)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        loadDate()
    }, [])

    useEffect(() => {
        console.log(update)
    }, [update])

    async function loadDate() {
        await api
            .get<categoryType>('/categories', {
                params: { userId },
            })
            .then((response) => {
                setSelectCategory(response.data)
                setArray(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function setArray(data: any) {
        setTrash(new Array(data.length).fill(false))
        setEdit(new Array(data.length).fill(false))
    }

    const handleClickPatch = (id: string, index: number) => {
        api.patch(`/categories/${id}`, update)
            .then((reponse) => {
                loadDate()
                console.log(reponse.status)
                edit[index] = false
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleClickButton = () => {
        setCreate(!create)
    }

    const handleOnChange = (e: { target: any }) => {
        const { value }: string | any = e.target
        setUpdate((prev: any) => ({
            ...prev,
            title: value,
        }))
    }

    const handleClickEdit = (index: number) => {
        let arrayEditCopy = [...edit]
        arrayEditCopy = arrayEditCopy.map((boolean, i) =>
            index === i ? !boolean : false
        )

        if (inputRefs.current[index]) {
            inputRefs.current[index].focus()
        }
        setEdit(arrayEditCopy)
    }

    function handleClickTrash(index: number) {
        let arrayTrashCopy = [...trash]
        arrayTrashCopy.map((boolean, i) => {
            if (index === i) {
                arrayTrashCopy[i] = !boolean
            } else {
                arrayTrashCopy[i] = false
            }
        })
        setTrash(arrayTrashCopy)
    }

    useEffect(() => {
        if (refresh) {
            loadDate()
            setRefresh(false)
        }
    }, [refresh])

    return (
        <S.Container>
            <S.Header>
                <h3>Lista de categorias</h3>
            </S.Header>

            <S.WrapperCategories>
            <S.WrapperButton create={create ?? false}>
                <DefaultButton 
                    onClick={handleClickButton}
                    ctaButton={'Nova Categoria'}
                />
            </S.WrapperButton>
                <CreateCategories
                    create={create}
                    setRefresh={setRefresh}
                    setCreate={setCreate}
                />
            </S.WrapperCategories>
            <S.WrapperList>
                <h3>Nome da categoria</h3>
                {selectCategory.map(({ title, _id }, index) => (
                    <S.Content key={_id}>
                        <S.Input
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            id={_id}
                            placeholder={title}
                            value={inputRefs.current.value}
                            onFocus={() => handleClickEdit(index)}
                            onBlur={() => handleClickPatch(_id, index)}
                            onChange={(e) => handleOnChange(e)}
                        />

                        <S.WrapperIcon>

                            {trash[index] ? (
                                <>
                                    <S.Icon
                                        icon={light('check')}
                                        onClick={() => handleClickDelete(_id)}
                                    />{' '}
                                    <S.Icon
                                        icon={light('xmark')}
                                        onClick={() => handleClickTrash(index)}
                                    />{' '}
                                </>
                            ) : edit[index] ?
                                <>
                                    <S.Icon
                                        icon={light('check')}
                                        onClick={() => handleClickPatch(_id, index)}
                                    />{' '}
                                    <S.Icon
                                        icon={light('xmark')}
                                        onClick={() => handleClickTrash(index)}
                                    />{' '}
                                </>
                            : (
                                <>
                                    <S.Icon
                                        icon={light('pencil')}
                                        onClick={() => handleClickEdit(index)}
                                    />

                                    <S.Icon
                                        icon={light('trash')}
                                        onClick={() => {
                                            handleClickTrash(index)
                                        }}
                                    />
                                </>
                            )}
                        </S.WrapperIcon>
                    </S.Content>
                ))}
            </S.WrapperList>
        </S.Container>
    )
}

Categories.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}