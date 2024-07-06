import {consulta} from '../database/conexao.js'

class SelecaoRepository {
    // Únicas regras de negócio que mudam, são as do repositório.
    create(nome){
        const sql =  "INSERT INTO selecoes SET ?";
    
        return consulta(sql, nome, 'Não foi possível cadastrar')
    }

    findAll(){
        const sql =  "SELECT * FROM selecoes;"
    
        return consulta(sql, 'Não foi possível localizar')
    }

    findById(id){
        const sql =  "SELECT * FROM selecoes WHERE id = ?";

        return consulta(sql, id, 'Não foi possível localizar')
    }

    update(nome, id){
        const sql =  "UPDATE selecoes SET ? WHERE id = ?;";
    
        return consulta(sql, [nome, id], 'Não foi possível atualizar')
    }
    delete(id){
        const sql =  "DELETE FROM selecoes WHERE id = ?;";
    
        return consulta(sql, id, 'Não foi possível deletar')
    }
}

export default new SelecaoRepository()
