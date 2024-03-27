const conn = require("../../../../mysql_connection");

const getResult = async(offset,limit)=>{
        try {
            // let result= await conn.query(`select e.student_id,concat(s.first_name," ",s.last_name) as student_name,
            // (select  sum(theoryObtainmark)   from examMaster where type_id= 1 and student_id = e.student_id group by student_id ) as Terminal_theory ,
            // (select  sum(practicalObtainMark)   from examMaster where type_id= 1 and student_id = e.student_id group by student_id ) as Terminal_practical  ,
            // (select  sum(theoryObtainmark)   from examMaster where type_id= 2 and student_id = e.student_id group by student_id ) as Prileam_theory ,
            // (select  sum(practicalObtainMark)   from examMaster where type_id= 2 and student_id = e.student_id group by student_id ) as Prileam_practical  ,
            // (select  sum(theoryObtainmark)   from examMaster where type_id= 3 and student_id = e.student_id group by student_id ) as Final_theory ,
            // (select  sum(practicalObtainMark)   from examMaster where type_id= 3 and student_id = e.student_id group by student_id ) as Final_practical,
            // (select  sum(practicalObtainMark)+ sum(theoryObtainmark)     from examMaster where student_id = e.student_id group by student_id) as Total
            // from examMaster as e join Student_Master as s on e.student_id = s.id group by e.student_id   limit ${limit} offset ${offset}`)
          
            let result= await conn.query(`select e.student_id,concat(s.first_name," ",s.last_name) as student_name,
            sum(case 
                  when type_id = 1 then e.theoryObtainmark else 0
                  end ) as Terminal_theory,
            sum(case 
                  when type_id = 1 then e.practicalObtainMark else 0
                  end ) as Terminal_practical ,
            sum(case 
                  when type_id = 2 then e.theoryObtainmark else 0
                  end ) as Prileam_theory,
            sum(case 
                  when type_id = 2 then e.practicalObtainMark else 0
                  end ) as Prileam_practical,
            sum(case 
                  when type_id = 3 then e.theoryObtainmark else 0
                  end ) as Final_theory,
            sum(case 
                  when type_id = 3 then e.practicalObtainMark else 0
                  end ) as Final_practical,
            sum( e.practicalObtainMark + e.theoryObtainmark) as Total
              from examMaster as e join Student_Master as s 
              on e.student_id = s.id  group by student_id limit ${limit} offset ${offset}`)
   
            return result[0]
        } catch (error) {
            console.log(error)
        }
}

const getResultCount = async()=>{
    try {
        let result= await conn.query(`select e.student_id,concat(s.first_name," ",s.last_name) as student_name,
        (select  sum(theoryObtainmark)   from examMaster where type_id= 1 and student_id = e.student_id group by student_id ) as Terminal_theory ,
        (select  sum(practicalObtainMark)   from examMaster where type_id= 1 and student_id = e.student_id group by student_id ) as Terminal_practical  ,
        (select  sum(theoryObtainmark)   from examMaster where type_id= 2 and student_id = e.student_id group by student_id ) as Prileam_theory ,
        (select  sum(practicalObtainMark)   from examMaster where type_id= 2 and student_id = e.student_id group by student_id ) as Prileam_practical  ,
        (select  sum(theoryObtainmark)   from examMaster where type_id= 3 and student_id = e.student_id group by student_id ) as Final_theory ,
        (select  sum(practicalObtainMark)   from examMaster where type_id= 3 and student_id = e.student_id group by student_id ) as Final_practical,
        (select  sum(practicalObtainMark)+ sum(theoryObtainmark)     from examMaster where student_id = e.student_id group by student_id) as Total
        from examMaster as e join Student_Master as s on e.student_id = s.id group by e.student_id `)
        
       
    
        return result[0].length
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getResult:getResult,getResultCount:getResultCount}