import React from 'react'
//import affairs from "./Affairs";
import m from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: any  // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }// need to fix

    return (
        <div>
            <span>{props.affair.name}</span>
            <span className={m.priority}>{props.affair.priority}</span>
            <SuperButton onClick={() => deleteCallback(props.affair._id)}>x</SuperButton>
        </div>
    )
}

export default Affair
