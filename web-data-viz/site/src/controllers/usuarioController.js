var usuarioModel = require("../models/usuarioModel");

function dadosGrafico(req, res){
    console.log("dentro do controller");
    usuarioModel.model.dadosGrafico()
    .then(
        function (resultado){
            res.json(resultado[0]);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String 

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar[0]);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }

            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var nome = req.body.nomeServer;

    var email = req.body.emailServer;

    var senha = req.body.senhaServer;

    // Faça as validações dos valores

    if (nome == undefined) {

        res.status(400).send("Seu nome está undefined!");

    } else if (email == undefined) {

        res.status(400).send("Seu email está undefined!");

    } else if (senha == undefined) {

        res.status(400).send("Sua senha está undefined!");

    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

        usuarioModel.cadastrar(nome, email, senha)

            .then(

                function (resultado) {

                    res.json(resultado);
                }
            ).catch(

                function (erro) {

                    console.log(erro);

                    console.log(

                        "Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);

                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function registrar(req, res) {

    var id = req.body.idServer

    var pontucao = req.body.pontuacaoServer

    usuarioModel.registrar(id, pontucao)
        .then(
            function (resultadoRegistrar) {
                console.log(`\nResultados encontrados: ${resultadoRegistrar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoRegistrar)}`); // transforma JSON em String 

                if (resultadoRegistrar.length == 1) {
                    console.log(resultadoRegistrar);
                    res.json(resultadoRegistrar[0]);
                } else if (resultadoRegistrar.length == 0) {
                    res.status(403).send("Id e/ou pontos inválido(s)");
                }
            }
        );
}

function pegarPontuacao(req, res) {
    var id = req.body.idServer;
    console.log(id)

    usuarioModel.pegarPontuacao(id)

        .then(
            function (resultadoGet) {
                console.log(`\nResultados encontrados: ${resultadoGet.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoGet)}`); // transforma JSON em String 

                if (resultadoGet.length > 0) {
                    console.log(resultadoGet);
                    res.json(resultadoGet);
                } else if (resultadoRegistrar.length == 0) {
                    res.status(403).send("Id e/ou pontos inválido(s)");
                }
            }
        );
}

module.exports = {

    autenticar,

    cadastrar,

    registrar,

    pegarPontuacao,

    dadosGrafico
}