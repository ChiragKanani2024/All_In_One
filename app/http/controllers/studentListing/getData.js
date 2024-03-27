const conn = require("../../../../mysql_connection");

const getData = async(offset,limit,orderby)=>{
        try {
            let result = await conn.query(`select * from Student_Master order by ${orderby?orderby:"id"} limit ${limit} offset ${offset} `)
            return result;
        } catch (error) {
            console.log(error)
        }
}

const getDataCount = async()=>{
    try {
        let result = await conn.query(`select count(*) as count from Student_Master `)
        return result[0][0].count;
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getData:getData,
    getDataCount:getDataCount
}