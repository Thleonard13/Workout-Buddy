require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use(express.json())
app.use('/api/workouts', workoutRoutes)

app.get('/', (req, res) => {
    res.json({mssg: 'hello'});
})

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, () => {
            console.log('listening on port ' + process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })


 