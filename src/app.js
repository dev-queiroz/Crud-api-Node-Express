import express from 'express'

const app = express()

app.use(express.json())

const selecoes = [
    { id: 1, nome: 'Brasil', grupo: 'G'},
    { id: 2, nome: 'Suíça', grupo: 'G'},
    { id: 3, nome: 'Camarões', grupo: 'G'},
    { id: 4, nome: 'Sérvia', grupo: 'G'},
    { id: 5, nome: 'Colômbia', grupo: 'A'},
    { id: 6, nome: 'Espanha', grupo: 'A'},
    { id: 7, nome: 'Portugal', grupo: 'A'},
    { id: 8, nome: 'França', grupo: 'A'},    
]

function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].nome  = req.body.nome
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção de id ${req.params.id} excluída com sucesso!`)
})

export default app
