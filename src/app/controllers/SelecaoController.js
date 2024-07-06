import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {
    // Aqui só muda os retornos, sejam de erro, ou de aceitação.
    async index(req, res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const nome = req.body
        const row = await SelecaoRepository.create(nome)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const nome = req.body
        const row = await SelecaoRepository.update(nome, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }

}

export default new SelecaoController()
