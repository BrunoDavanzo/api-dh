
const userList = [
    {
    "id": "1",
    "nome": "Bruno",
    "email": "bruno_gf@hotmail.com",
    "telefone": "34251622",
    "senha": "123hgumdj",
    "status": true
    },
    {
        "id": "2",
        "nome": "Tiemi",
        "email": "bruno_gf@hotmail.com",
        "telefone": "34251622",
        "senha": "123hgumdj",
        "status": true
        }
]
class UserService{
    static findAll() {
        return userList
    }

    static findById (userId) {
        const user = userList.find((user)=> {user.id == userId})
        
        return user
    }
    static create (userToSave) {
        userToSave.id = userList.length + 1
        userToSave.status = true

        userList.push(userToSave)

        return userToSave
}
    static update (userId, userData){
        const user = UserService.findById(userId)
        console.log(user)
        Object.assign(user, userData)
        
        return user
    }
    static remove (userId) {
        const indexUser = userList.findIndex((user) => user.id == userId)
        userList.splice(indexUser, 1)

        return true
    }
}

module.exports = UserService