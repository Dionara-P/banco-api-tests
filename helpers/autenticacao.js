const request = require('supertest'); //Chama o supertest

const obterToken = async (usuario, senha) => { //Função anônima que recebe usuario e senha
 
    const respostaLogin = await request (process.env.BASE_URL) //Request pra API
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            'username': usuario,
            'senha': senha
        })

    return respostaLogin.body.token    
}
//Exportando a função para ser utilizada por outros arquivos 
module.exports = {
    obterToken
}