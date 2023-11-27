var database = require("../database/config")

function dadosGrafico() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
    select Quizz.pontuacao, Quizz.dtTentativa
	from Usuario
		join Quizz 
			on Usuario.idusuario = Quizz.fkUsuario;    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT nickname,idusuario,email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

function cadastrar(nome, email, senha) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores

    //  e na ordem de inserção dos dados.

    var instrucao = `

        INSERT INTO Usuario (nickname, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function registrar(id, pontos) {

    var instrucao = `
    
        insert into Quizz value (${id}, ${pontos}, date(now()));

    `;

    return database.executar(instrucao);
}

function pegarPontuacao(id) {

    var instrucao = `
    
        select * from Quizz where fkUsuario = ${id};

    `;

    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    registrar,
    pegarPontuacao,
    dadosGrafico
};