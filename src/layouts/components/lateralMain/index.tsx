import React, { useState } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import { MenuOptions } from '@/src/config/api/menuOptions'
import SubMenu from '../subMenu'

interface ISubMenu {
    showSubMenu: boolean
    options: IOptions[]
    subMenuInFocus: number
}
interface IOptions {
    id: string
    title: string
    route: string
}
export default function LateralMenu() {
    const router = useRouter()
    const [subMenu, setSubMenu] = useState<ISubMenu>()

    function handleSubMenu(options: IOptions[], index: number) {
        console.log(options)
        setSubMenu((data) => ({
            ...data,
            showSubMenu:
                data?.subMenuInFocus === index ? !data?.showSubMenu : true,
            subMenuInFocus: index,
            options,
        }))
    }
    return (
        <S.Container>
            <SubMenu config={subMenu} />
            <S.Header>CLIEENT</S.Header>
            <S.MenuOptionsList>
                {MenuOptions.map((item: any, index: number) => (
                    <li>
                        <S.Icon icon={item.icon} />
                        <span
                            onClick={() => {
                                item.subMenu
                                    ? handleSubMenu(item.subMenu.options, index)
                                    : router.push(item.route)
                            }}
                        >
                            {item.title}
                        </span>
                    </li>
                ))}
            </S.MenuOptionsList>
        </S.Container>
    )
}
