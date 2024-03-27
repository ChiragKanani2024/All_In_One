const conn = require("../../../mysql_connection");

const getDataHelper = ()=>{
    return {
        async basic_detail_all(){
            try {
                let result = await conn.query(`select * from basic_detail`);
                return result[0]
            } catch (error) {
                console.log(error)
            }
        },
        async basic_detail(employee_id){
            try {
                let result = await conn.query(`select * from basic_detail where employee_id = ${employee_id}`);
                if (result[0].length == 0) {
                    return false;
                }
                return result[0][0]
            } catch (error) {
                console.log(error)
            }
           
        },
        async board_detail(employee_id){
            try {
                let result = await conn.query(`select * from board_detail where employee_id = ${employee_id}`);
                return result[0]
            } catch (error) {
                console.log(error)
            }
            
        },
        async degree_detail(employee_id){
            try {
                let result = await conn.query(`select * from degree_detail where employee_id = ${employee_id}`);
                return result[0]
            } catch (error) {
                console.log(error)
            }
           
        },
        async language_detail(employee_id){
            try {
                let result = await conn.query(`select * from language_detail where employee_id = ${employee_id}`);
                return result[0]
            } catch (error) {
                console.log(error)
            }
          
        },
        async refered_detail(employee_id){
            try {
                let result = await conn.query(`select * from refered_contact_detail where employee_id = ${employee_id}`);
                return result[0]
            } catch (error) {
                console.log(error)
            }
           
        },
        async technology_detail(employee_id){
            try {
                let result = await conn.query(`select * from technology_detail where employee_id = ${employee_id}`);
                return result[0]
            } catch (error) {
                console.log(error)
            }
            
        },
        async work_experience_detail(employee_id){
            try {
                let result = await conn.query(`select * from workexperience_detail where employee_id = ${employee_id}`);
                return result[0]
            } catch (error) {
                console.log(error)
            }

        }

    }
}

module.exports = getDataHelper