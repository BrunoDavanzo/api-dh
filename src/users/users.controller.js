const UserService = require("./users.service")

class UserController {
    static findAll(req, res){
       const users = UserService.findAll()

        res.json(users)
    }

    static findById (req, res) {
        const { id } = req.params

        const users = UserService.findById(id)


        res.json(user)
    }

    static create(req, res) {
        const newUser ={
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            senha: req.body.senha
        }
        const userSaved = UserService.create(newUser)

        res.json(userSaved)
    }
    static update(req, res) {
        const {id} = req.params

        const userData = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            senha: req.body.senha
        }
        
        const userUpdated = UserService.update(id, userData)
        
        res.json(userUpdated)
    }
    
    static remove(req, res) {
        const {id} = req.params
        const result = UserService.remove(id)


        res.json({ status: 'Apagar usuario'})
    }
}
module.exports = UserController