module.exports = {

    async calc(request, response) {
        const { operador1, operacao, operador2 } = request.body;
        
        let resultado = eval(operador1+operacao+operador2);
        
        let json_saida = {
            "operador1":operador1,
            "operador2":operador2,
            "operacao":operacao,
            "resultado":resultado
        };
        return response.json(json_saida);
    }

}