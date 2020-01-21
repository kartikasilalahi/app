// const express = require("express");
// const app = express();
// var BodyParser = require("body-parser");
// const mysqldb = require('./connection').mysqldb

// // const mysql = require("mysql");

// const PORT = 2010;

// // const db = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "mysqlrootpasswordhere",
// //     database: "hokihokapp.use(express.static('public'))i",
// //     port: "3306"
// // });

// app.use(BodyParser.urlencoded({ extended: false }));
// app.use(popokkece.json()); // untuk client ngirim ke server

// app.get("/prod", (req, res) => {
//     var sql = `select * from product;`;
//     mysqldb.query(sql, (err, result) => {
//         if (err) res.status(500).send(err);
//         console.log(result);
//         res.status(200).send(result);
//     });
// });

// app.listen(PORT, () => console.log(`API jalan di PORT ${PORT}`));
// =========================================================================

const express = require("express");
const app = express();
var BodyParser = require("body-parser");
const cors=require('cors')  // npm ini gunanya untuk menghubungkan backend dan frontend
// const mysqldb = require('./connection').mysqldb

const PORT = 2010;

app.use(cors())
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json()); // untuk client ngirim ke server
app.use(express.static('public'))

const {userRouters}=require('./routers')


app.get('/', (req,res)=>{
    return res.status(200).send('<h1>Selamat datang</h1>')
})

app.use('/user', userRouters)

app.listen(PORT, () => console.log(`API jalan di PORT ${PORT}`));


    // app.get('/users', (req,res)=>{
    //     mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id`, (err,result) =>{
    //         if(err) res.status(500).send(err)
    //         else {
    //             mysqldb.query(`select * from roles`, (err, result1)=>{
    //                 if(err) res.status(500).send(err)
    //                 else {
    //                     res.status(200).send({
    //                         datauser:result, 
    //                         datarole:result1
    //                     })
    //                 }
    //             })
    //         }
    //     })
    // })
    
    // // app.put('/users', (req,res)=>{
    // //     mysqldb.query(`update users set ? where id=${req.params.id}`, req.body, (err,result)=>{
    // //         if(err) res.status(500).send(err)
    // //         else {
    // //             mysqldb.query(`select * from roles`, req.body, (err1,result1)=>{
    // //                 if (err1) res.status(500).send(err1)
    // //                 return res.status(200).send(result1)
    // //             })
    // //         }
    // //     })
    // // })
    
    
    // app.put('/users/:id',(req,res)=>{
    //     mysqldb.query(`update users set ? where id=${req.params.id}`,req.body,(err,result)=>{
    //         if (err) res.status(500).send(err)
    //         mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id`,(err,result1)=>{
    //             if (err) res.status(500).send(err)
    //             mysqldb.query('select * from roles',(err,result2)=>{
    //                 if (err) res.status(500).send(err)
    //                 res.status(200).send({datauser:result1,datarole:result2})
    //             })
    //         })
    //     })
    // })
    
    
    // app.post('/users', (req,res)=>{
    //     // var data={username: 'yanto', password:'234', email:'yanto@gmail.com', phone:'081122334455', usia:22}
    //     // var sql=`select * from users where username='${data.username}' or email='${data.email}' `
    //     var sql=`select * from users where username='${req.body.username}' or email='${req.body.email}' `
    
    //     mysqldb.query(sql, (err, result)=>{ 
    //         if(err) res.status(500).send(err)
    //         console.log('masuk')
    //         if(result.length){
    //             return res.status(500).send({message:'user/email has already registerd'})
    //         }else{
    //             // === post via query on vscode ===
    //             // sql=`insert into users set ?`
    //             // mysqldb.query(sql, data, (err1,result1)=>{
    //             //     if (err1) res.status(500).send(err1)
    //             //     return res.status(200).send(result1)
    //             // })
    //             // === post via body postman ===
    //             sql=`insert into users set ?`
    //             mysqldb.query(sql, req.body, (err1,result1)=>{
    //                 if (err1) res.status(500).send(err1)
    //                 return res.status(200).send(result1)
    //             })
    //         }
    //     })
    // })
    
    
    // app.post('/postusers',(req,res)=>{
    //     try {
    //         const path = '/post/images'; //file save path
    //         const upload = uploader(path, 'USERS').fields([{ name: 'image'}]); //uploader(path, 'default prefix')
    
    //         upload(req, res, (err) => {
    //             if(err){
    //                 return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
    //             }
    //             console.log('masuk')
    //             const { image } = req.files;
    //             console.log(image)
    //             const imagePath = image ? path + '/' + image[0].filename : null;
    //             console.log(imagePath)
    
    //             console.log(req.body.data)
    //             const data = JSON.parse(req.body.data);
    //             console.log(data)
    //             data.image = imagePath;
    //             // data.userId=req.user.userid
    
    //             var sql = 'INSERT INTO users SET ?';
    //             mysqldb.query(sql, data, (err, results) => {
    //                 if(err) {
    //                     console.log(err.message)
    //                     fs.unlinkSync('./public' + imagePath);
    //                     return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
    //                 }
    //                 console.log(results);
    //                 mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id`,(err,result4)=>{
    //                     if (err) res.status(500).send(err)
    //                     mysqldb.query('select * from roles',(err,result5)=>{
    //                         if (err) res.status(500).send(err)
    //                         res.status(200).send({datauser:result4,datarole:result5})
    //                     })
    //                 })   
    //             })    
    //         })
    //     } catch(err) {
    //         return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
    //     }
    // })
    
    
    
    // // app.delete('/users/:id', (req, res)=>{
    // //     console.log(req.params)
    // //     let sql = `select * from users where id=${req.params.id}`
    // //     mysqldb.query(sql, (err,result)=>{
    // //         if(err) res.status(500).send(err)
    // //         if(result.length){
    // //             sql = `delete from users where id=${req.params.id}`
    // //             mysqldb.query(sql,(err1,result1)=>{
    // //                 if (err1) res.status(500).send(err1)
    // //                 sql=`select * from users`
    // //                 console.log(result1)
    // //                 mysqldb.query(sql,(err2,result2)=>{
    // //                     if (err2) res.status(500).send(err2)
    // //                     return res.status(200).send(result2)
    // //                 })
    // //             })
    // //         } else {
    // //             return res.status(500).send({message:'tidak ada id nya'})
    // //         }
    // //     })
    // // })
    
    
    
    // app.delete('/users/:id',(req,res)=>{
    //     console.log(req.params)
    //     let sql=`select * from users where id=${req.params.id}`
    //     mysqldb.query(sql,(err,result)=>{
    //         if (err) res.status(500).send(err)
    //         if(result.length){
    //             sql=`delete from users where id=${req.params.id}`
    //             mysqldb.query(sql,(err,result1)=>{
    //                 if (err) res.status(500).send(err)
    //                 sql=`select * from users`
    //                 console.log(result1)
    //                 mysqldb.query(sql,(err,result2)=>{
    //                     if (err) res.status(500).send(err)
    //                     return res.status(200).send(result2)
    //                 })
    //             })
    //         }else{
    //             return res.status(500).send({message:'nggak ada woy idnya'})
    //         }
    //     }) 
    // })
