import React from "react"

export default function Unread() {
    const [messages, setMessages] = React.useState(["hello"])

    function displayMessages(messages) {
        messages.length === 0 ?
        <h1>You are all caught up!</h1> :
        <h1>You have {messages.length} unread messages</h1>
    } 
    console.log(messages)
    return (
        <div>
            {displayMessages}
        </div>
    )
}
