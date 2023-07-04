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
                <S.Item key={'Menu-Show'}>
                    <S.WrapperIcon>
                        <S.Icon
                            className="select-menu"
                            icon={light('bars')}
                            onClick={() => {
                                showMenu === true
                                    ? setShowMenu(false)
                                    : setShowMenu(true)
                            }}
                        />
                    </S.WrapperIcon>
                    {showMenu === true ? (
                        <S.Title
                            className="title"
                            onClick={() => {
                                setShowMenu(false)
                            }}
                        >
                            <p>Recolher Menu</p>
                        </S.Title>
                    ) : null}
                </S.Item>

                {MenuOptions.map((item: any, index: number) => (
                    <S.Item key={item.id}>
                        <S.WrapperIcon>
                            <S.Icon
                                icon={item.icon}
                                onClick={() => {
                                    handleSubMenu(item, index)
                                }}
                            />
                        </S.WrapperIcon>
                        {showMenu === true ? (
                            <S.Title
                                className="title"
                                onClick={() => {
                                    handleSubMenu(item, index)
                                }}
                            >
                                <p> {item.title} </p>
                            </S.Title>
                        ) : null}
                    </S.Item>
                ))}
            </S.MenuOptionsList>
        </S.Container>
    )
}
