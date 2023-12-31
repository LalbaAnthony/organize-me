const express = require('express')
const favicon = require('serve-favicon')

const app = express()
const port = 3000

app
    .use((req, res, next) => {
        console.log(`URL: ${req.url}, METHOD: ${req.method} `)
        next()
    })
    .use(favicon(__dirname + '/favicon.ico'))

const helper = (status, data) => {
    return {
        status: status,
        data: data
    }
}

const tasks = [
    {
        id: 101,
        assignedDate: '2023-07-30',
        libelle: "Learn HTML",
        positionInDay: 1,
        createdDate: '2023-08-01',
        done: true,
    },
    {
        id: 102,
        assignedDate: '2023-06-30',
        positionInDay: 2,
        libelle: "Learn CSS",
        createdDate: '2023-07-11',
        done: false,
    },
    {
        id: 103,
        assignedDate: '2023-07-30',
        positionInDay: 3,
        libelle: "Learn JS",
        createdDate: '2023-07-12',
        done: false,
    }
]

app.get('/api/tasks', (req, res) => {
    let status = tasks ? "sucess" : "error"
    res.json(helper(status, tasks))
})

app.get('/api/tasks/:taskId', (req, res) => {

    const taskId = parseInt(req.params.taskId)
    const task = tasks.find(t => t.id === taskId)

    let status = tasks && tasks ? "sucess" : "error"
    res.json(helper(status, task))
})

app.post('/api/tasks', (req, res) => {
    const id = tasks.length + 1
    const createdDate = new Date()
    const task = req.body
    task.id = id
    task.createdDate = createdDate
    tasks.push(task)
    let status = tasks ? "sucess" : "error"
    res.json(helper(status, task))
})

app.listen(port, () => console.log(`main.js listening on http://localhost:${port}/`))