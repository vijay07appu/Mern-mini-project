import express from "express"
import connectDB from "./db/dbConnection.js"
import User from "./models/userModels.js"
import cors from "cors"

const app = express()

const port = 5000

app.use(cors())


app.use(express.json())

connectDB()

app.post('/register', async (req, res) => {
    try {

        const { name, email, password } = req.body
        console.log(name)
        console.log(email)
        console.log(password)

        const user = new User({ name, email, password })
        if (!name || !email || !password) {
            res.status(500).json({ message: "Please Enter all the Field" })
        }
        await user.save()
        res.status(201).json({ message: "Registration Successfull" })

    }
    catch (error) {
        res.status(500).json({ message: "Registration failed" })
    }

})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)

        console.log("email is "+email)
        console.log("password is "+password)
        

        if (!email || !password) {
            res.status(500).json({ message: "Please Enter all the Field" })

        }


        const user = await User.findOne({ email })
        if (!user) {
            res.status(500).json({ message: "User does Not exist" })

        }

        if (user.password != password) {
            res.status(500).json({ message: "Invalid password" })

        }


        if (user) {
            res.status(201).json({ message: "Login Successfull" })
        }

        // if (email === 'one@gmail.com' && password === 'pass') {
        //     res.json({ message: 'Login successful' });
        //   } else {
        //     res.status(401).json({ message: 'Invalid credentials' });
        //   }

    
    }
    catch (error) {
    res.status(500).json({ message: "Login Failed" })

}
})


app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
