import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType, action: AllActionTypes): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]
            if (action.payload === 'up') {

                copyState.sort(function (a, b) {
                        let nameA = a.name.toLowerCase()
                        let nameB = b.name.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    }
                )
            }
            if (action.payload === 'down') {

                state.sort(function (a, b) {
                        let nameA = a.name.toLowerCase()
                        let nameB = b.name.toLowerCase()
                        if (nameA > nameB)
                            return -1
                        if (nameA < nameB)
                            return 1
                        return 0
                    }
                )
            }
            return copyState
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

type AllActionTypes = sortACType | checkACType
type sortACType = ReturnType<typeof sortAC>
export const sortAC = (payload: string) => {
    return {
        type: 'sort',
        payload
    }
}
type checkACType = ReturnType<typeof checkAC>
export const checkAC = (payload: number) => {
    return {
        type: 'check',
        payload
    }
}
