
const bcrypt = require('bcrypt');
const generate_unique_id = require('generate-unique-id');
const conn = require('../../../../mysql_connection');


const RegisterController = ()=>{
    return {
            getform(req,res){
                res.render("auth/register");
            },
            async registerUser(req,res){
                try {
                    let salt = generate_unique_id({length:4});
                let activation_key = generate_unique_id({length:12});

                let result = await conn.query(`select id,status,active_pin from Users where email = '${req.body.email}'`)
                if(result[0].length >=1){
                    if (result[0][0].status === "inActive" ) {
                        let update = await conn.query(`update Users set created_at = CURRENT_TIMESTAMP  where email = '${req.body.email}'`)
                        return res.send({
                            success:true,
                            alert:"You are Already Registered But Your Account is InActive Click Below link for Activate",
                            activationLink:`http://localhost:3000/activateuser?email=${req.body.email}&activationKey=${result[0][0].active_pin}`
                            });
                    }
                    return res.send({success:false,alert:"Already User Exists with This email Try another one"})
                }else{
                   
                        let detail = {
                            email:req.body.email.trim(),
                            password:await bcrypt.hash(req.body.password.trim()+salt,10),
                            salt:salt,
                            status:"inActive",
                            active_pin:activation_key
                        }
                        let result = await conn.query('insert into Users SET ?',detail);
                        if (result[0].affectedRows == 1) {
                            
                       return res.send({
                        success:true,
                        alert:"Click Below Link for Activate Your account",
                        activationLink:`http://localhost:3000/activateuser?email=${req.body.email}&activationKey=${activation_key}`
                        })
                        }else{
                            return res.send({success:false,alert:"Something Went Wrong Try Again"})
                        }
                    
                }
                } catch (error) {
                    console.log(error)
                }
                
            },
            async activeUser(req,res){
                try {
                    let email = req.query.email;
                    let activation_key = req.query.activationKey;
                    let result = await conn.query(`select * from Users where email = '${email}'`)
                    if(result[0].length >=1){
                        if (activation_key == result[0][0].active_pin) {
                            let datetime = new Date(result[0][0].created_at)
                           let curdate= new Date();
                           let diff = curdate - datetime;
                           diff =parseInt(diff/(1000*60));
                         
                            if (diff<120) {
                                let active = await conn.query(`update Users set status = "Active" where email = '${email}'`)
                                if (active[0].affectedRows >= 1) {
                                return res.send("Your Account is Activated. You Can Login Now "); 
                                }else{
                                    return res.send("Something Went Wrong Try Again")
                                }
                            }else{
                                let del = await conn.query(`delete from Users where email = '${email}'`)
                                return res.send("Activation Link Expires Register Again");
                            }
                           
                        }else{
                            return res.send("Something Wrong in Activation Link!!!")
                        }
                        
                    }else{
                        return res.send("Something Wrong in Activation Link!!!")
                    }
                } catch (error) {
                    console.log(error)
                }
               
            }
    }
}

module.exports = RegisterController