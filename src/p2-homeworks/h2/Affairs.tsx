import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import m from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    console.log(props)
    const mappedAffairs = props.data.map((a) => (
        <div className={m.someClass}>
            <Affair // should work
                key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        </div>
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button className={m.all} onClick={setAll}>All</button>
            <button className={m.high} onClick={setHigh}>High</button>
            <button className={m.middle} onClick={setMiddle}>Middle</button>
            <button className={m.low} onClick={setLow}>Low</button>

        </div>
    )
}

export default Affairs
