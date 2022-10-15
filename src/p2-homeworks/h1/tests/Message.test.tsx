import React from 'react'
import {render} from '@testing-library/react'
import Message from "../Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

test('find text "test message name"', () => {
    const {getByText} = render((


        <Message

            messaging={messageData}
        />
    ))
    const linkElement = getByText(/test message name/i)
    expect(linkElement).toBeInTheDocument()
})

const messageData1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

test('find text "test message"', () => {
    const {getByText} = render((
        <Message
            messaging={messageData1}
        />
    ))
    const linkElement = getByText(/test message/i)
    expect(linkElement).toBeInTheDocument()
})

const messageData2 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

test('find text "test message time"', () => {
    const {getByText} = render((
        <Message
            messaging={messageData2}
        />
    ))
    const linkElement = getByText(/test message time/i)
    expect(linkElement).toBeInTheDocument()
})
