import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './database/routes'


const app = express()

app.use(express.json())
app.use(router)


mongoose.connect('mongodb+srv://junioroliveira:32756847@cluster0.agkmcyx.mongodb.net/?retryWrites=true&w=majority')

    .then((data) => {
        console.log('MongoDB Connection Succeeded')
    })

    .catch((err) => {
        console.log('Error in Db Connection', err.message)
    })




app.listen(3334)