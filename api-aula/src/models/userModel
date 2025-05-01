var database = require("../database/config")
function authenticate(email, password) {
    console.log("Tentando login com:", email, password);
    var instrucaoSql = `
        SELECT nameUser, emailUser FROM tbl_user WHERE emailUser = '${email}' AND passwordUser = '${password}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function register(name, email, password) {
    
    var instrucaoSql = `
        INSERT INTO tbl_user (nameUser, emailUser, passwordUser) VALUES ('${name}', '${email}', '${password}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    authenticate,
    register
};