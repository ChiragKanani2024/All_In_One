const conn = require("../../../../mysql_connection");


const cityStateController = ()=>{
    return {
        async showPage(req,res){
            res.render("component/jobApplication/cityState",{layout:"layouts/job_application_layout.ejs"})
        },
        async getState(req,res){
            try {
                let result = await conn.query("select * from states")
                res.json(result[0])
            } catch (error) {
                console.log(error)
            }
          
        },
        async getCitys(req,res){
           try {
            let result = await conn.query(`select * from cities where state_id = ${req.body.state_id}`)
            res.json(result[0])
           } catch (error) {
            console.log(error)
           }
            
        }
    }
}

module.exports = cityStateController