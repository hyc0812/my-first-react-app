import React from "react"

export default function Unread() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            <h1>You have _ unread messages!</h1>
        </div>
    )
}
