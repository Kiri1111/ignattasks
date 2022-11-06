import React, {useState} from 'react'
import Affairs from './Affairs'
import m from './HW2.module.css'
// types

export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = AffairTypeObj[] // need to fix any
export type FilterType = 'all' | AffairPriorityType

type AffairTypeObj = {
    _id: number,
    name: string,
    priority: AffairPriorityType
}
// constants
let defaultAffairs: AffairType = [ // need to fix any

    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: FilterType): any => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    if (filter === 'low') return affairs.filter(a => a.priority === 'low')

    // need to fix
}
export const deleteAffair = (affairs: AffairType, _id: number): AffairType => { // need to fix any
    return affairs.filter((a) => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={m.hW2}>
            
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
