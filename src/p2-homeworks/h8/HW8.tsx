import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

// export type UserType =
export type UserType = Array<ObjType>


type ObjType = {
    _id: number
    name: string
    age: number
}
const initialPeople: UserType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: ObjType) => (
        <div key={p._id}>
            <span>{'Name: ' + p.name}</span>
            <span>{' Age: ' + p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('down')))
    const check = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))
    // const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))

    return (
        <div>
            <hr/>
            homeworks 8
            <hr/>

            {/*should work (должно работать)*/}
            {finalPeople}

            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={check}>check 18</SuperButton></div>
            {/*<div>sort down</div>*/}
            {/*check 18*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
