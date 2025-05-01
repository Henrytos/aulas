const mysql2 = require("mysql2")

const configuracao = {
    host: "127.0.0.1",
    database: "example",
    password: "sptech@2025",
    user: "henry",
}





function executar(intrucao) {
    const mysql = mysql2.createConnection(configuracao)
    mysql.connect()

    return new Promise((resolve, reject) => {
        mysql.query(intrucao, function (err, results, fields) {
            if (err) {
                console.log(err)
                mysql.d
            }
            mysql.end()

            resolve(results)
        }
        )
    })

}


executar("SELECT * FROM users WHERE id = 1").then((usuarios) => {
    console.log(usuarios[0].nome)
})
