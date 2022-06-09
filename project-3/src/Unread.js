import React from "react"

export default function Unread() {
    const [messages, setMessages] = React.useState(["a", "b", "c", "d"])

    console.log(messages)
    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You are all caught up!</h1> :
                <h1>you have {messages.length} unread message{messages.length > 1 && "s"}</h1>
            }
        </div>
    )
}
