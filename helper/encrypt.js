const crypto=require('crypto')
module.exports=(password)=>{
    return hashpassword = crypto.createHmac('sha256', 'inisecret').update(password).digest('hex')
}