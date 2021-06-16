const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.json({ status: 'Criar usuario'})
})

router.get('/', (req, res) => {
    res.json({ status: 'Lista usuarios'})
})

router.get('/:id', (req, res) => {
    res.json({ status: 'Busca usuarios'})
})

router.put('/:id', (req, res) => {
    res.json({ status: 'Atualizar usuario'})
})

router.delete('/', (req, res) => {
    res.json({ status: 'Apagar usuario'})
})
module.exports = router