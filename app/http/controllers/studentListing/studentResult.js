const conn = require("../../../../mysql_connection");

const getStudentResult = async(id)=>{
        try {
            // let result= await conn.query(`select s.id,concat(s.first_name," ",s.last_name) as student_name,et.examName,sm.name as subject_name,e.theoryObtainmark,e.practicalObtainMark,e.date,e.total  from Student_Master as s join examMaster as e on s.id= e.student_id  join examType as et on et.type_id = e.type_id join subjectMaster as sm on sm.subject_id = e.subject_id where s.id = ${id}`)
          
            let result = await conn.query(`select e.student_id,concat(s.first_name," ",s.last_name) as student_name,sub.name,
            sum(case 
                  when type_id = 1 then e.theoryObtainmark else 0
                  end ) as Terminal_theory,
            sum(case 
                  when type_id = 1 then e.practicalObtainMark else 0
                  end)  as Terminal_practical ,
            sum(case 
                  when type_id = 2 then e.theoryObtainmark else 0
                  end ) as Prileam_theory,
            sum(case 
                  when type_id = 2 then e.practicalObtainMark else 0
                  end) as Prileam_practical,
            sum(case 
                  when type_id = 3 then e.theoryObtainmark else 0
                  end) as Final_theory,
            sum(case 
                  when type_id = 3 then e.practicalObtainMark else 0
                  end)  as Final_practical
              from examMaster as e join Student_Master as s on e.student_id = s.id join subjectMaster as sub on e.subject_id = sub.subject_id where e.student_id  = ${id} group by e.subject_id;`)

           let attandence = await conn.query(`select count(student_id) as present_day,DATE_FORMAT(date, '%Y-%m') as month , day( LAST_DAY(date)) as monthday from  attandence_Master where attandence = 1 and student_id = ${id} group by DATE_FORMAT(date, '%Y-%m') , monthday`)
     
           
            return {
                result1:result[0],
                attandence:attandence   
                     } 
 }
catch (error) {
            console.log(error)
        }
}




module.exports =getStudentResult