import app from './src/app.js'
import conexao from './infra/conexao.js'

const PORT = 3000

conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Sucesso")
        
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`)
        })
    }
})
