const conn = require("../../../../mysql_connection");

const getattandence = async(offset,limit,filterbyMonth,req)=>{
        try {
            let date = new Date()
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            // console.log(`${new Date().getFullYear()}-${`${new Date().getMonth()}`.padStart(2,"0")}`)
            let result = await conn.query(`select s.id,concat(s.first_name," ",s.last_name) as student_name,count(s.id) as presentDay from Student_Master as s
            LEFT JOIN attandence_Master as a on s.id = a.student_id  where DATE_FORMAT(a.date, '%Y-%m')  = ${filterbyMonth?`'${filterbyMonth}'`:`'${year}-${`${month}`.padStart(2,0)}'`} and a.attandence = 1 group by s.id limit ${limit} offset ${offset}`)

            if (!filterbyMonth) {
            req.session.filterbymonth = `${year}-${`${month}`.padStart(2,0)}` ;
            }

            
            return result[0];
        } catch (error) {
            console.log(error)
        }
}

const getattandenceCount = async(filterbyMonth,req)=>{
    try {
        let date = new Date()
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let result = await conn.query(`select s.id,concat(s.first_name," ",s.last_name) as student_name,count(s.id) as presentDay from Student_Master as s
        LEFT JOIN attandence_Master as a on s.id = a.student_id 
        where DATE_FORMAT(a.date, '%Y-%m')  = ${filterbyMonth?`'${filterbyMonth}'`:`'${year}-${`${month}`.padStart(2,0)}'`} and a.attandence = 1
         group by s.id `)

         if (!filterbyMonth) {
            req.session.filterbymonth = `${year}-${`${month}`.padStart(2,0)}` ;
            }

          
        return result[0].length;
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getattandence:getattandence,
    getattandenceCount:getattandenceCount
}