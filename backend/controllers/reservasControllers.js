const conexao = require("../database");
const validarReserva = require("../validations/reservasValidacao");

// Buscar reservas
function listarReservas(req, res) {

    const sql = `
        SELECT
            reservas.id,
            hospedes.nome AS hospede,
            quartos.numero AS quarto,
            reservas.checkin,
            reservas.checkout,
            reservas.status
        FROM reservas
        JOIN hospedes
            ON reservas.hospede_id = hospedes.id
        JOIN quartos
            ON reservas.quarto_id = quartos.id
        ORDER BY reservas.checkin
    `;

    conexao.query(sql, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                mensagem: "Erro ao buscar reservas",
                erro: erro.message
            });
        }

        res.status(200).json(resultado);
    });
}


// Cadastrar reserva
function cadastrarReserva(req, res) {

    const {
        hospede_id,
        quarto_id,
        checkin,
        checkout
    } = req.body;

    // Validação dos dados
    const erro = validarReserva(
        hospede_id,
        quarto_id,
        checkin,
        checkout
    );

    if (erro) {
        return res.status(400).json({
            mensagem: erro
        });
    }

    // Verificar conflito de reserva
    const verificar = `
        SELECT id
        FROM reservas
        WHERE quarto_id = ?
        AND status <> 'Cancelada'
        AND checkin < ?
        AND checkout > ?
    `;

    conexao.query(
        verificar,
        [quarto_id, checkout, checkin],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao verificar reserva",
                    erro: erro.message
                });
            }

            if (resultado.length > 0) {
                return res.status(409).json({
                    mensagem: "Quarto já reservado nesse período"
                });
            }

            const sql = `
                INSERT INTO reservas
                (hospede_id, quarto_id, checkin, checkout)
                VALUES (?, ?, ?, ?)
            `;

            conexao.query(
                sql,
                [hospede_id, quarto_id, checkin, checkout],
                (erro, resultado) => {

                    if (erro) {
                        return res.status(500).json({
                            mensagem: "Erro ao cadastrar reserva",
                            erro: erro.message
                        });
                    }

                    res.status(201).json({
                        mensagem: "Reserva cadastrada com sucesso!",
                        id: resultado.insertId
                    });
                }
            );
        }
    );
}


// Atualizar reserva
function atualizarReserva(req, res) {

    const { id } = req.params;

    const {
        hospede_id,
        quarto_id,
        checkin,
        checkout,
        status
    } = req.body;

    const sql = `
        UPDATE reservas
        SET hospede_id = ?,
            quarto_id = ?,
            checkin = ?,
            checkout = ?,
            status = ?
        WHERE id = ?
    `;

    conexao.query(
        sql,
        [hospede_id, quarto_id, checkin, checkout, status, id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao atualizar reserva",
                    erro: erro.message
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem: "Reserva não encontrada"
                });
            }

            res.status(200).json({
                mensagem: "Reserva atualizada com sucesso!"
            });
        }
    );
}


// Deletar reserva
function deletarReserva(req, res) {

    const { id } = req.params;

    const sql = "DELETE FROM reservas WHERE id = ?";

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                mensagem: "Erro ao deletar reserva",
                erro: erro.message
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Reserva não encontrada"
            });
        }

        res.status(200).json({
            mensagem: "Reserva deletada com sucesso!"
        });
    });
}


module.exports = {
    listarReservas,
    cadastrarReserva,
    atualizarReserva,
    deletarReserva
};