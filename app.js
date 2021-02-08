const express = require('express')
const pool = require('./config/dbPool')
const authRouter = require('./router/auth')
const normalRouter = require('./router/normal')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(pool)

// router
app.use('/auth', authRouter)
app.use('/normal', normalRouter)

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})