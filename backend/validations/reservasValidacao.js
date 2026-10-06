function validarReserva(hospede_id, quarto_id, checkin, checkout) {

    // Campos obrigatórios
    if (!hospede_id || !quarto_id || !checkin || !checkout) {
        return "Todos os campos são obrigatórios";
    }

    // Verificar se o ID do hóspede é válido
    if (hospede_id <= 0) {
        return "Hóspede inválido";
    }

    // Verificar se o ID do quarto é válido
    if (quarto_id <= 0) {
        return "Quarto inválido";
    }

    // Converter datas
    const dataCheckin = new Date(checkin);
    const dataCheckout = new Date(checkout);

    // Verificar se as datas são válidas
    if (isNaN(dataCheckin.getTime()) || isNaN(dataCheckout.getTime())) {
        return "Data inválida";
    }

    // Checkout precisa ser depois do checkin
    if (dataCheckout <= dataCheckin) {
        return "A data de checkout deve ser posterior ao checkin";
    }

    return null;
}

module.exports = validarReserva;