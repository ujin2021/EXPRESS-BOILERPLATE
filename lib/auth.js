const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

// pw 암호화
exports.bcryptPW = async(pw) => {
    let result = ''
    try {
        result = bcrypt.hashSync(pw, saltRounds)
    } catch(e) {
        result = false
    }
    return result
}

// login 시 받은 pw와 db의 pw 비교
exports.comparePW = async(pw, dbpw) => {
    let result = ''
    try {
        result = bcrypt.compareSync(pw, dbpw)
    } catch(e) {
        result = false
    }
    return result
}

// user_id를 사용해 jwt 발급 
exports.issueToken = async(user_id) => {
    let result = ''
    try{
        result = jwt.sign({ id: user_id }, secretKey, { expiresIn: '30d'})
    } catch(e) {
        result =  false
    }
    return result
}