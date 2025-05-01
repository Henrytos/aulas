const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config({
    path: path.join(__dirname, '../.env')
})
const { getAllTasks, createTask } = require('./model/task.js')


const app = express()
app.use(cors({
    origin: '*'
}))// policia do navegador

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.get('/tasks', async (req, res) => {
    getAllTasks().then((tasks) => {
        console.log(tasks)
        return res.json(tasks)
    })
})

app.post('/tasks', (req, res) => {
    const { task } = req.body

    createTask(task).then((result) => {
        console.log(result)
        return res.json(result)
    }).catch((error) => {
        console.error(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    })
})
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
})