import { useEffect, useState } from 'react'
import MainLayout from '../../../src/layouts/mainLayout'
import * as S from '../../../styles/categories/listCategories'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/config/api/api'
import { useRouter } from 'next/router'
import useStore from '../../../src/zustand/store'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import InputText from '@/src/components/inputText'
import CreateCategories from '../createCategories'

type categoryType = {
    title: string
    _id: string
}[]

interface ICategories {
    title: string
}

export default function ListCategories() {
    const { userId } = useStore()
    const router = useRouter()
    let [selectCategory, setSelectCategory] = useState<categoryType>([])
    const [create, setCreate] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [trash, setTrash]=useState<Boolean>(false)
    const [update, setUpdate] = useState<ICategories>()

    function handleClickDelete(id:string) {
        api.delete(`/categories/${id}`)
        setTrash(false)
        router.reload()
    }

    const handleClickCheck = (e: any) => {
        e.preventDefault()
        api.patch('/categories', update)
        setEdit(false)
    }

    const handleClickButton = () => {
      setCreate(!create)
    }

    const handleClickEdit = () => {
        setEdit(!edit)
    }

    const handleClickTrash = () => {
        setTrash(!trash)
    }

    useEffect(() => {
        loadDate()
    }, [])

    async function loadDate() {
        const { data } = await api.get<categoryType>('/categories', {
            params: { userId },
        })
        setSelectCategory(data)
    }
    return (
        <S.Container>
        <CreateCategories create = {create} />
        <S.Header>
       <h3>lista de categorias</h3>
       <S.wrapperButton>
       <DefaultButton onClick={handleClickButton} ctaButton={'Criar'} />
       </S.wrapperButton>
       </S.Header>
       <S.WrapperList>
       <h3>Nome da categoria</h3>
        {selectCategory.map(({title, _id})=> (
            <S.Content>
                {edit ? <InputText id='title' label={title} placeholder={title} setState={setUpdate} value={update?.title} /> : <span>{title}</span>}
                <S.WrapperIcon>
                    {edit ? <><S.Icon icon={light('check')} onClick={handleClickCheck} /> <S.Icon icon={light('xmark')} onClick={handleClickEdit} /> </>:<S.Icon icon={light('pencil')} onClick={handleClickEdit} />}
                    {trash ? <><S.Icon icon={light('check')} onClick={()=>{handleClickDelete(_id)}} /> <S.Icon icon={light('xmark')} onClick={handleClickTrash} /> </>:<S.Icon icon={light('trash')} onClick={handleClickTrash} />}
              </S.WrapperIcon>
            </S.Content>
        ))}
        </S.WrapperList>
       </S.Container>
    )
}
ListCategories.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
