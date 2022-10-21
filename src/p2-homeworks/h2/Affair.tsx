import React from 'react'
//import affairs from "./Affairs";

type AffairPropsType = {
    // key не нужно типизировать
    affair: any  // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }// need to fix

    return (
        <div>
            <span>{props.affair.name}</span>

            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
