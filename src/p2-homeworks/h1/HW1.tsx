import React from 'react'
import Message from "./Message";



function HW1() {
    const messageData = {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Иван',
        message: 'npm start нажимал??????',
        time: '22:00',
    }

    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)
<div className={'Mes'}>
            <Message
                messaging={messageData}

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
