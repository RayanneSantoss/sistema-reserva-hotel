function validarHospede(nome, cpf, telefone, email) {
    
    // Verifica todos os campos obrigatórios
    if(!nome || !cpf || !telefone || !email) {
        return "Todos os campos são obrigatórios.";
    }

    // Verifica o tamanho do nome
    if(nome.length < 3) {
        return "O nome deve ter pelo menos 3 caracteres.";
    }

    //Verifica CPF
    if(cpf.length !== 14){
        return "CPF inválido";
    }

    // Verificar formato do CPF
    const formatoCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!formatoCpf.test(cpf)) {
        return "CPF deve estar no formato 000.000.000-00";
    }

    // Verificar telefone
    if(telefone.length < 10) {
        return "Telefone inválido.";
    }

    // Verifica e-mail
    if(!email.includes("@")) {
        return "E-mail inválido.";
    }

    return null
}

module.exports = validarHospede;