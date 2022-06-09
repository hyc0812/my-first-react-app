import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName:"", lastName:"", email:"", comments:""}
    );
    
    console.log(formData)

    
    function handleChange(event) {
        setFormData(preFormData => {
            return {
                ...preFormData,
                [event.target.name]:event.target.value
            }
        })
    };

    return (
        <div>
            <form>
                <input 
                    type="text"
                    placeholder="First Name"
                    onChange={ handleChange}
                    name="firstName"
                    value={ formData.firstName }
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={ handleChange }
                    name="lastName"
                    value={ formData.lastName }
                />
                <input
                    type="text"
                    placeholder="Email"
                    onChange={ handleChange }
                    name="email"
                    value={ formData.email }
                />
                <textarea
                    placeholder="Please input whatever..."
                    onChange={ handleChange }
                    name="comments"
                    value={ formData.comments }
                />

            </form>
        </div>
    );
}