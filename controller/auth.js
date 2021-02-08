const { bcryptPW, comparePW, issueToken } = require('../lib/auth')

exports.signupAPI = async(req, res) => {
    try{
        // const { } = req.body

        // pw 암호화
        // const b_pw = await bcryptPW(password)

        // user_id 를 사용해서 jwt 발급
        // const token = await issueToken(user_id)
    
        // res.status(200).json({'msg' : 'signup success')
    } catch(e) {
        // signup error 발생시 처리 logic
    }
}

exports.signinAPI = async(req, res) => {
    try {
        // const { } = req.body

        // password : post로 받은 pw, user_password : db에 저장된 pw
        // const compare = await comparePW(password, user_password)

        // user_id를 사용해 jwt 발급
        // const token = await issueToken(user_id)

        // res.status(200).json({'msg' : 'signin success')
    } catch(e) {
        // signin error 발생시 처리 logic
    }
}