import conexao from '../database/conexao.js'

class SelecaoRepository {
    // Únicas regras de negócio que mudam, são as do repositório.
    create(nome){
        const sql =  "INSERT INTO selecoes SET ?";
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, nome, (erro, result) => {
                if (erro) return reject('Não cadastrou')
                
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findAll(){
        const sql =  "SELECT * FROM selecoes;"
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, result) => {
                if (erro) return reject('Não localizado')
                
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id){
        const sql =  "SELECT * FROM selecoes WHERE id = ?";

        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => {
                if (erro) return reject('Não localizado')
                
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    update(nome, id){
        const sql =  "UPDATE selecoes SET ? WHERE id = ?;";
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, [nome, id], (erro, result) => {
                if (erro) return reject('Não atualizado')
                
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    delete(id){
        const sql =  "DELETE FROM selecoes WHERE id = ?;";
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => {
                if (erro) return reject('Não apagado')
                
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
}

export default new SelecaoRepository()
