const bcrypt=require('bcrypt')
const dash=require('../models/userdashboard')
const db = require("../database/index")
module.exports={
    insertP:(req,res)=>{
        dash.insertP((err,result)=>{
            err ? res.status(500).send(err) : res.status(201).send('Product aded')
        },req.body)
    },
    updateP:(req,res)=>{
        dash.updateP((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).send('Product updated')
        },req.body)
    },
    deleteP:(req,res)=>{
        dash.deleteP((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).send('Product deleted')
        },req.body)
    },
    getAllP:(req,res)=>{
        dash.getallP((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).json(result)
        },req.body)
    },
    updateUser:(req,res)=>{
        // try{
        // bcrypt.hash(req.body.password, 10, (err, hash) => {
        //     if (err) {
        //     return res.status(500).send({
        //     msg: err
        //     });
        //     } else {
        //     // has hashed pw => add to database
        //     db.query(
        //     `update user set username=${req.body.username}; password=${db.escape(hash)} ;email=${db.escape(req.body.email)} where iduser=${req.body.id}`,(error, result) => {
        //     if (error) {
        //     throw error;
        //     return res.status(400).send({
        //     msg: error
        //     });}
        //     return res.status(201).send({
        //     msg: 'The user has been registerd with us!'});});
        //     }
        //     })
        // }catch(err){
        //     console.log(err);
        // };
        
        try {
            
            var pas
            const hashed = bcrypt.hashSync(req.body.password, 10,(err, hash) => {
                console.log(err)
                   err ? res.status(500).send({ msg: err}) : hash
                     })
            sql = `update user set username="${req.body.username}", email="${req.body.email}",password="${hashed}" where iduser=${req.body.id}`
            db.query(sql, (err,result)=>{
                if(err){
                return res.status(400).send(err)}
                else {
                    return res.status(200).json(result)              }
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({message :"server error"})
        }
    },
    deleteUser:(req,res)=>{
        dash.deleteUser((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).json('Your account has been deleted')
        },req.body)
    }
}