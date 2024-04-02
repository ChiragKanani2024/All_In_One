const bcrypt = require('bcrypt');
const generate_unique_id = require('generate-unique-id');
const conn = require('../../../../mysql_connection');


const ForgotPasswordController = ()=>{
    return{
        getForm(req,res){
            try {
                res.render("auth/forgotpass")
                
            } catch (error) {
                console.log(error)
            }
        },
        async getUpdatePassForm(req,res){
            try {
                let email = req.query.email;
                let activation_key = req.query.activationKey;
                let result = await conn.query(`select * from Users where email = '${email}'`)
                if(result[0].length >=1){
                    if (activation_key == result[0][0].active_pin) {
                       let datetime = new Date(result[0][0].pass_updated_at)
                       let curdate= new Date();
                       let diff = curdate - datetime;
                       diff =parseInt(diff/(1000*60));
                     
                        if (diff<3) {
                        res.render("auth/forgotpassinputs",{ layout: 'layouts/layout2.ejs' })
                        }else{
                        return res.send("Link Expired Generate Again")
                        }
                       
                    }else{
                        return res.send("Something Wrong in This Link!!!")
                    }
                    
                }else{
                    return res.send("Something Wrong in This Link!!!")
                }
            } catch (error) {
                console.log(error)
            }
        },
        async forgotform(req,res){
            try {
                let result = await conn.query(`select * from Users where email = '${req.body.email}'`)
                if(result[0].length >=1){
                    if (result[0][0].status === "Active") { 
                       
                           let update =await conn.query(`update Users SET pass_updated_at = CURRENT_TIMESTAMP where email = '${req.body.email}'`);
    
                              return res.send({
                            success:true,
                            alert:"Click Below Link for Change Your account Password",
                            forgotPassLink:`http://localhost:3000/changepassword?email=${req.body.email}&activationKey=${result[0][0].active_pin}`
                            });
                    }else{
                        return res.send({success:false,alert:"Your Account is now InActive register again"})
                    }
                   
                }else{
                    return res.send({success:false,alert:"Wrong Credential Try Again"})
                }
            } catch (error) {
                console.log(error)
            }
          
        },
        async UpdatePass(req,res){
            try {

                if (!req.body.password.trim() || !req.body.conform_password.trim()) {
                    return res.send({success:false,alert:"Enter All Details"})
                }else{
                    if (req.body.password !== req.body.conform_password) {
                        return res.send({success:false,alert:"Both Password Not Matched Try Again"})
                    }else{
                let result = await conn.query(`select * from Users where email = '${req.body.email}'`)
                let datetime = new Date(result[0][0].pass_updated_at)
                let curdate= new Date();
                let diff = curdate - datetime;
                diff =parseInt(diff/(1000*60));
              
                 if (diff<3) {
                        let salt = generate_unique_id({length:4});
                        let detail = {
                            password:await bcrypt.hash(req.body.password.trim()+salt,10),
                            salt:salt
                        }
                        let update = await conn.query(`update  Users SET ? where email = '${req.body.email}'`,detail);
                        if(update[0].affectedRows == 1){
                            return res.send({
                                success:true,
                                alert:"Your Password Has Been Changed you can Login Now"
                                })
                        }
                    }else{
                        return res.send({success:false,alert:"Change Password Session Expired",redirect:true})
                    }
                }
            }
               
                
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = ForgotPasswordController