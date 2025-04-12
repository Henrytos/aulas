const mysql = require("mysql2/promise.js")




async function insertStudent(nome) {
    connection.execute(`INSERT INTO aluno(nome) VALUES('${nome}')`);
    console.log(`Aluna ${nome} foi adicionada`)
}

async function deleteStudent(nome) {
    connection.execute(`DELETE FROM aluno WHERE nome = '${nome}'`);
}

async function updateStudent(id, nome) {
    connection.execute(`UPDATE aluno SET nome = '${nome}' WHERE idAluno = ${id}`);
}


async function getStudent(id) {

    try {

        const connection =
            await mysql.createConnection({
                host: '127.0.0.1', // localhost
                user: 'henry',
                password: 'sptech@2025',
                database: 'pi',
                port: 3306
            })
        const [results, fields] = await connection.execute(`SELECT * FROM aluno WHERE idAluno = ${id}`);
        console.log(results); // results contains rows returned by server

    } catch (err) {
        console.log(err);
    }
}

getStudent(19)