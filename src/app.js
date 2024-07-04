import express from 'express'

const app = express()

// mock
const selecoes = [
    { id: 1, nome: 'Brasil', grupo: 'G'},
    { id: 2, nome: 'Argentina', grupo: 'G'},
    { id: 3, nome: 'Uruguai', grupo: 'G'},
    { id: 4, nome: 'Paraguai', grupo: 'G'},
    { id: 5, nome: 'Colômbia', grupo: 'A'},
    { id: 6, nome: 'Espanha', grupo: 'A'},
    { id: 7, nome: 'Portugal', grupo: 'A'},
    { id: 8, nome: 'França', grupo: 'A'},    
]

// rota padrão raiz
app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

export default appb 
