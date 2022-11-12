import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Pages';
import s from './hw5.module.css'

export function Header() {
    const [isSideMenu, setSideMenu] = useState<boolean>(false)

    const open = (isSideMenu: boolean) => setSideMenu(!isSideMenu)
    const onClickHandler = () => open(isSideMenu)

    return (
        <header className={s.topBar}>
            <div className={s.menuBar}>
                <span className={s.span} onClick={onClickHandler}>Нажми на меня)</span></div>

            <div className={s.container} style={{left: isSideMenu ? '0' : '-265px'}}>
                <NavLink onClick={() => setSideMenu(false)} className={({isActive}) => isActive ? s.act : s.def}
                         to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink onClick={() => setSideMenu(false)} className={({isActive}) => isActive ? s.act : s.def}
                         to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink onClick={() => setSideMenu(false)} className={({isActive}) => isActive ? s.act : s.def}
                         to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>
        </header>
    )
}

