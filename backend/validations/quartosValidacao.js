function validarQuarto(numero, tipo, capacidade, valor_diaria) {

    // Campos obrigatórios
    if (!numero || !tipo || !capacidade || !valor_diaria) {
        return "Todos os campos são obrigatórios";
    }

    // Número do quarto
    if (numero <= 0) {
        return "O número do quarto deve ser maior que zero";
    }

    // Tipo do quarto
    if (tipo.length < 3) {
        return "O tipo do quarto é inválido";
    }

    // Capacidade
    if (capacidade <= 0) {
        return "A capacidade deve ser maior que zero";
    }

    // Valor da diária
    if (valor_diaria <= 0) {
        return "O valor da diária deve ser maior que zero";
    }

    return null;
}

module.exports = validarQuarto;