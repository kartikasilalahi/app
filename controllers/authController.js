const cryptogenerate = require('../helper/encrypt')

// const secret = '24681357'

module.exports={
    belajarcrypto:(req,res)=>{
        console.log(req.query);
        const hashpassword = cryptogenerate(req.query.password)
        res.send({encrypt:hashpassword, lengthencrypt:hashpassword.length})
        
    }
    
}