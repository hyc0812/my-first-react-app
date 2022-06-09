import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            comments:"",
            isFriendly: true,
            employment:"unemployed",
            favColor:""
        }
    );
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(preFormData => {
            return {
                ...preFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    };

    function handleSubmit(event) {
        event.preventDefault();
        // submitToWhateverApi(formData);
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
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
                <input 
                    type="checkbox"
                    id="isFriendly"
                    checked={ formData.isFriendly }
                    name="isFriendly"
                    onChange={ handleChange }
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <br />
                
                <fieldset>
                    <legend>Current employment status</legend>

                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        onChange={ handleChange }
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />

                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        onChange={ handleChange }
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />

                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        onChange={ handleChange }
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select id="favColor"
                        name="favColor" 
                        value={formData.favColor}
                        onChange={ handleChange }>
                    <option value="">-Choose-</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br />
                <br />
                <button>Submit</button>  
                {/* type="submit" by default in React.js*/}
            </form>
        </div>
    );
}