
const bcrypt = require('bcrypt');
const conn = require('../../../../mysql_connection');
const jwt = require('jsonwebtoken');
const LoginController = ()=>{
    return {
            getform(req,res){
                res.render("auth/login",{layout:"layouts/layout.ejs"});
            },
            async loginUser(req,res){
                let result = await conn.query(`select * from Users where email = '${req.body.email}'`)

                if(result[0].length >=1){
                    if (result[0][0].status === "Active") {
                        if (await bcrypt.compare(req.body.password.trim()+result[0][0].salt,result[0][0].password)) {
                            let token = jwt.sign({email:req.body.email}, process.env.SECRET_KEY);
                           
                            res.cookie('token' , token, { maxAge: 5000*1000 })
                            return res.send({
                                success:true,
                                alert:"Welcome to Chirag's Tasks",
                                })
                        }else{
                        return res.send({success:false,alert:"Wrong Credential Try Again"})
                        }
                    }else{
                        return res.send({success:false,alert:"Your Account is now InActive register again"})
                    }
                   
                }else{
                    return res.send({success:false,alert:"Wrong Credential Try Again"})
                }
            }
    }
}

module.exports = LoginController