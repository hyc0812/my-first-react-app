import React from "react"
import './App.css'

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords do not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    

    const [formData, setFormData] = React.useState(
      {
        email:"",
        password:"",
        confirmPassword:"",
        okayToEmail:false
      }
    )

    function handleChange(event) {
      const { name, value, type, checked } = event.target;
      setFormData(preFormData => {
        return {
          ...preFormData,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }

    function handleSubmit(event) {
        event.preventDefault();
      if (formData.password===formData.confirmPassword) {
        if (formData.okayToEmail) {
          console.log("Successfully signed up");
          console.log("Thanks for signing up for our newsletter");
        } else {
          console.log("Successfully signed up");
        }
        event.preventDefault();
      } else {
        console.log("Passwords do not match! Try again");
      }
    }
    
    return (
        <div className="form-container">
          <h3>Fill in sign up form</h3>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={ handleChange }
                    value={ formData.email }
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={ handleChange }
                    value={ formData.password }
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    onChange={ handleChange }
                    value={ formData.confirmPassword }
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        onChange={ handleChange }
                        checked={ formData.okayToEmail }
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
