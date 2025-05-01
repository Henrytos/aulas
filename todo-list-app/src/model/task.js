
const executeQuery = require('../database/connection.js')

function getAllTasks() {
    return executeQuery('SELECT * FROM tasks')
}

function createTask(task) {
    return executeQuery(`INSERT INTO tasks (name) VALUES ('${task}')`)
}

module.exports = {
    getAllTasks,
    createTask
} 