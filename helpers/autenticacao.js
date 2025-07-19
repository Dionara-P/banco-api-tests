const request = require('supertest'); //Chama o supertest
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async (usuario, senha) => { //Função anônima que recebe usuario e senha
    const bodyLogin = { ...postLogin }  

    const respostaLogin = await request (process.env.BASE_URL) //Request pra API
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin)

    return respostaLogin.body.token    
}
//Exportando a função para ser utilizada por outros arquivos 
module.exports = {
    obterToken
}