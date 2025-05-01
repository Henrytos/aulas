var userModel = require("../models/userModel");
function authenticate(req, res){
    var email = req.body.emailServer
    var password = req.body.passwordServer
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (password== undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }else{
        userModel.authenticate(email, password)
            .then(function(response){
                if (response.length == 1) {
                    res.json({
                        email: response[0].emailUser,
                        name: response[0].nameUser // opcional se quiser mostrar nome
                    });
                } else if (response.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com mesmo login e senha!");
                }
            })
    }
}
function register(req, res) {   
    var name = req.body.nameServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;
    if (name == undefined) {
        res.status(400).send("name = undefined!");
    } else if (email == undefined) {
        res.status(400).send("email = undefined!");
    } else if (password == undefined) {
        res.status(400).send("password = undefined!");
    } else {
        userModel.register(name, email,password)
            .then(
                function (result) {
                    res.json(result);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    authenticate,
    register
}