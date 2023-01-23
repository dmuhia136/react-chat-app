import React from 'react'
import Message from './Message'

const Messages = () => {
    var myMessage=false
  return (
    <div className={myMessage?' w-[100%] ml-4 grid gap-x-8 gap-y-4 grid-cols-1':'justify-end place-content-end items-end'}>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages