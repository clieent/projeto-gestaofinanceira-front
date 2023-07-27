import React from 'react'
import * as S from './style'
import { useRouter } from 'next/router'

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

type SubMenuProps = {
    config: ISubMenu | undefined
}

export default function SubMenu({ config }: SubMenuProps) {
    const router = useRouter()
    return (
        <S.Container showSubMenu={config?.showSubMenu ?? false}
        >
            <S.OptionsList showSubMenu={config?.showSubMenu ?? false}>
                {Array.isArray(config?.options)
                    ? config?.options.map((option: IOptions, index: number) => {
                          return (
                              <li
                                  key={option.id}
                                  onClick={() => {
                                      config.showSubMenu = false
                                      router.push(`${option.route}`)
                                  }}
                              >
                                  {option.title}
                              </li>
                          )
                      })
                    : null}
            </S.OptionsList>
        </S.Container>
    )
}
