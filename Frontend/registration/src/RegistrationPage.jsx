import React, { useState } from 'react'
import axios from 'axios'

function RegistrationPage() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleRegistration=async ()=>
        {
            try{
                const response= await axios.post("http://localhost:5000/register",{name,email,password})
                console.log("response data is "+response.data)
                const { success, message } = response.data

                if (success) {
                    console.log("Registration  successfull")
                }
                else {
                    console.log(message)
                }


            }
            catch(err)
            {
                console.error(err.response.data)

            }

        }
    return (
        <>
            <h1>Registration Page</h1>
            <div>
                <input
                    type='text'
                    placeholder='Enter the user Name '
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required />

                <input
                    type='text'
                    placeholder='Enter your email '
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required />

                <input
                    type='text'
                    placeholder='Enter your password '
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required />

                <button type='submit' onClick={handleRegistration}>Register</button>
            </div>
        </>

    )
}

export default RegistrationPage
