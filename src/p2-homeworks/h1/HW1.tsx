import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Иван',
    message: 'npm start нажимал??????',
    time: '22:00',
}


function HW1() {


    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}
            <div className={'Mes'}>
                <Message
                    avatar= {messageData.avatar}
                name={ messageData.name}
                message={messageData.message}
                time={messageData.time}

                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1
