import express, { request, response } from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    
    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)

/*
    Criar nossa API de Usuários

    - Criar um usuário: OK
    - Listar todos os usuários: OK
    - Editar um usuário
    - Deletar um usuário
*/