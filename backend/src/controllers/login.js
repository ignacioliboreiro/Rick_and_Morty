const users = require('../utils/users')

const login = function(req, res) {
    const {email, password} = req.query

    const userFilter = users.find((element) => element.email === email && element.password === password )

    if(userFilter){
        res.status(200).json({access: true})
    } else {
        res.status(200).json({access: false})
    }
}

module.exports = login