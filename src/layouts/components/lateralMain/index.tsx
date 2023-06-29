import React, { SetStateAction, useState } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import { MenuOptions } from '@/src/config/menuOptions'
import SubMenu from '../subMenu'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import LogoClieent from '@/src/components/LogoClieent'

interface ISubMenu {
    showSubMenu: boolean
    options: IOptions[] | null
    subMenuInFocus: number
}
interface IOptions {
    id: string
    title: string
    route: string
}

type LateralMenuProps = {
    showMenu: boolean
    setShowMenu: React.Dispatch<SetStateAction<boolean>>
}

export default function LateralMenu({
    showMenu,
    setShowMenu,
}: LateralMenuProps) {
    const router = useRouter()
    const [subMenu, setSubMenu] = useState<ISubMenu>()

    function handleSubMenu(optionMenu: any, index: number) {
        optionMenu.subMenu
            ? setSubMenu((data) => ({
                  ...data,
                  showSubMenu:
                      data?.subMenuInFocus === index
                          ? !data?.showSubMenu
                          : true,
                  subMenuInFocus: index,
                  options: optionMenu.subMenu.options,
              }))
            : (() => {
                  setSubMenu((data) => ({
                      ...data,
                      showSubMenu: false,
                      subMenuInFocus: index,
                      options: null,
                  }))
                  router.push(optionMenu.route)
              })()
    }
    return (
        <S.Container showMenu={showMenu}>
            <SubMenu config={subMenu} />
            <S.Header>
                {showMenu === true ? (
                    <LogoClieent
                        type="rectangle"
                        h={60}
                        w={190}
                        brandColor="#D4D4D4"
                        textColor="#D4D4D4"
                    />
                ) : (
                    <LogoClieent
                        type="symbol"
                        h={60}
                        w={30}
                        brandColor="#D4D4D4"
                    />
                )}
            </S.Header>
            <S.MenuOptionsList>
                <S.WrapperLi>
                    <li key={'Menu-Show'}>
                        <S.Icon
                            className="select-menu"
                            icon={light('bars')}
                            onClick={() => {
                                showMenu === true
                                    ? setShowMenu(false)
                                    : setShowMenu(true)
                            }}
                        />
                        {showMenu === true ? (
                            <span
                                onClick={() => {
                                    setShowMenu(false)
                                }}
                            >
                                Recolher Menu
                            </span>
                        ) : null}
                    </li>
                </S.WrapperLi>
                {MenuOptions.map((item: any, index: number) => (
                    <S.WrapperLi>
                        <li key={item.id}>
                            <S.Icon
                                icon={item.icon}
                                onClick={() => {
                                    handleSubMenu(item, index)
                                }}
                            />
                            {showMenu === true ? (
                                <span
                                    onClick={() => {
                                        handleSubMenu(item, index)
                                    }}
                                >
                                    {item.title}
                                </span>
                            ) : null}
                        </li>
                    </S.WrapperLi>
                ))}
            </S.MenuOptionsList>
        </S.Container>
    )
}
