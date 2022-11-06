import React from 'react'
import m from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: any  // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (_id: number) => props.deleteAffairCallback(_id)// need to fix

    const priorityColor = m.item + ' ' + m[props.affair.priority]

    return (
        <div className={m.affairAll}>
            <span>{props.affair._id}</span>
            <span className={m.item}>{props.affair.name}</span>
            <span className={priorityColor}>{props.affair.priority}</span>
            <SuperButton className={m.button} onClick={() => deleteCallback(props.affair._id)}>x</SuperButton>
        </div>
    )
}

export default Affair
