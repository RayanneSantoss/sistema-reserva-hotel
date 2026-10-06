const conexao = require("../database");

const validarHospede = require("../validations/hospedesValidacao");


// Listar hóspedes
function listarHospedes(req, res) {

    conexao.query(
        "SELECT * FROM hospedes",
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao buscar hóspedes",
                    erro: erro.message
                });
            }

            res.status(200).json(resultado);
        }
    );
}


// Cadastrar hóspede
function cadastrarHospede(req, res) {

    const {
        nome,
        cpf,
        telefone,
        email
    } = req.body;


    // Validação
    const erro = validarHospede(
        nome,
        cpf,
        telefone,
        email
    );

    if (erro) {
        return res.status(400).json({
            mensagem: erro
        });
    }


    const sql = `
        INSERT INTO hospedes
        (nome, cpf, telefone, email)
        VALUES (?, ?, ?, ?)
    `;


    conexao.query(
        sql,
        [nome, cpf, telefone, email],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao cadastrar hóspede",
                    erro: erro.message
                });
            }

            res.status(201).json({
                mensagem: "Hóspede criado com sucesso!",
                id: resultado.insertId
            });
        }
    );
}


// Atualizar hóspede
function atualizarHospede(req, res) {

    const { id } = req.params;

    const {
        nome,
        cpf,
        telefone,
        email
    } = req.body;


    const sql = `
        UPDATE hospedes
        SET nome = ?,
            cpf = ?,
            telefone = ?,
            email = ?
        WHERE id = ?
    `;


    conexao.query(
        sql,
        [nome, cpf, telefone, email, id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao atualizar hóspedes",
                    erro: erro.message
                });
            }


            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem: "Hóspede não encontrado"
                });
            }


            res.status(200).json({
                mensagem: "Hóspede atualizado com sucesso!"
            });
        }
    );
}


// Deletar hóspede
function deletarHospede(req, res) {

    const { id } = req.params;

    const sql = `
        DELETE FROM hospedes
        WHERE id = ?
    `;


    conexao.query(
        sql,
        [id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao deletar hóspede",
                    erro: erro.message
                });
            }


            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem: "Hóspede não encontrado"
                });
            }


            res.status(200).json({
                mensagem: "Hóspede deletado com sucesso!"
            });
        }
    );
}


module.exports = {
    listarHospedes,
    cadastrarHospede,
    atualizarHospede,
    deletarHospede
};