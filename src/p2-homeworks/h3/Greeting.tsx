import React, {KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: () => void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter')
            addUser()
    }
    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyDown={onKeyDownHandler}
                   className={inputClass} placeholder={'Введите ваше имя'}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
