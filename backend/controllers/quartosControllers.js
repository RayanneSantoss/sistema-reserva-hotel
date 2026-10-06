const conexao = require("../database");

const validarQuarto = require("../validations/quartosValidacao");


// Listar quartos
function listarQuartos(req, res) {

    conexao.query(
        "SELECT * FROM quartos",
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao buscar quartos",
                    erro: erro.message
                });
            }

            res.status(200).json(resultado);
        }
    );
}


// Cadastrar quarto
function cadastrarQuarto(req, res) {

    const {
        numero,
        tipo,
        capacidade,
        valor_diaria
    } = req.body;


    // Validação
    const erro = validarQuarto(
        numero,
        tipo,
        capacidade,
        valor_diaria
    );

    if (erro) {
        return res.status(400).json({
            mensagem: erro
        });
    }


    const sql = `
        INSERT INTO quartos
        (numero, tipo, capacidade, valor_diaria)
        VALUES (?, ?, ?, ?)
    `;


    conexao.query(
        sql,
        [numero, tipo, capacidade, valor_diaria],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao cadastrar quarto",
                    erro: erro.message
                });
            }

            res.status(201).json({
                mensagem: "Quarto cadastrado com sucesso!",
                id: resultado.insertId
            });
        }
    );
}


// Atualizar quarto
function atualizarQuarto(req, res) {

    const { id } = req.params;

    const {
        numero,
        tipo,
        capacidade,
        valor_diaria,
        status
    } = req.body;


    const sql = `
        UPDATE quartos
        SET numero = ?,
            tipo = ?,
            capacidade = ?,
            valor_diaria = ?,
            status = ?
        WHERE id = ?
    `;


    conexao.query(
        sql,
        [
            numero,
            tipo,
            capacidade,
            valor_diaria,
            status,
            id
        ],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao atualizar quarto",
                    erro: erro.message
                });
            }


            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem: "Quarto não encontrado"
                });
            }


            res.status(200).json({
                mensagem: "Quarto atualizado com sucesso!"
            });
        }
    );
}


// Deletar quarto
function deletarQuarto(req, res) {

    const { id } = req.params;

    const sql = `
        DELETE FROM quartos
        WHERE id = ?
    `;


    conexao.query(
        sql,
        [id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao deletar quarto",
                    erro: erro.message
                });
            }


            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem: "Quarto não encontrado"
                });
            }


            res.status(200).json({
                mensagem: "Quarto deletado com sucesso."
            });
        }
    );
}


module.exports = {
    listarQuartos,
    cadastrarQuarto,
    atualizarQuarto,
    deletarQuarto
};