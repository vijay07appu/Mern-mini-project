import React, { useState } from 'react'
import axios from 'axios';

function LoginPage() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    // const onSubmitHandler = async (e)=>{
    //     e.preventDefault()
    //     try{
    //         const response=await  axios.post('http://localhost:5173/login',LoginData)
    //         const {success,message}=response.data

    //         if(success)
    //             {
    //                 console.log("Login successfull")
    //             }
    //             else{
    //                 console.log(message)
    //             }
    //     }
    //     catch(err)
    //     {
    //         console.error(err.response.data)

    //     }

    //     setLoginData({
    //         email:"",
    //         password:""
    //     })

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });

            console.log("output of response of data")
            console.log(response.data)
            const { success, message } = response.data

            if (success) {
                console.log("Login successfull")
            }
            else {
                console.log(message)
            }
        }
        catch (err) {
            console.error(err.response.data)

        }
    };
    return (
        <>
            <h1>Login Page</h1>
            <div>

                <input
                    type='text'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder='Enter email '
                    required />



                <input
                    type='text'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder='Enter password '
                    required />


                <button type="submit" onClick={handleLogin}>Login</button>
            </div>
        </>

    )
}

export default LoginPage
