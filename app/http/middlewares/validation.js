const comboGenerate = require('../../../app/http/controllers/jobApplication/comboGenerate');

const validate =async (req,res,next)=>{
try {
  
    
    let data = req.body;
    let genderRadio =await comboGenerate('gender_radio',req.body.gender);
    let relationShipCombo = await comboGenerate('relationship_combo',data.relationship_status);
    let locationCombo = await comboGenerate('prefered_location_combo',data.prefered_location);
    let departmentCombo = await comboGenerate('department_combo',data.department);
    let statesCombo = await comboGenerate('state_combo',data.state);
    let combos = {genderRadio,relationShipCombo,locationCombo,departmentCombo,statesCombo}



    const {first_name,last_name,basic_designation,email,phone,dob,city,state,zipcode,address1,address2,relationship_status} = req.body

   

    if (!first_name.trim() || !last_name.trim() || !basic_designation.trim() || !email.trim() || !phone.trim() || !city.trim() || !state.trim() || !zipcode.trim() || (!address1.trim() && !address2.trim()) || !relationship_status.trim()) {
        req.flash('error_basic', 'Basic Details Required');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }

    if(phone.length < 10 || phone.length >10){
        req.flash('error_basic', 'Mobile Number  have to be 10 digit');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }else  if(!(/^\d+$/.test(phone))){
        req.flash('error_basic', 'Mobile No have to be only digit');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }else if(!(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email))){
        req.flash('error_basic', 'Enter Proper Email');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }else if (!(/^\d+$/.test(zipcode))) {
        req.flash('error_basic', 'Zipcode No have to be only digit');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }

    if (dob.length <= 8) {
        req.flash('error_basic', 'Enter date in valid form');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }else{
        if (isNaN(new Date(dob))) {
            req.flash('error_basic', 'Enter date in valid form');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }
    }
    

    const {board_name,passing_year,percentage,bachelor_course_name,bachelor_university,bachelor_passing_year,bachelor_cgpa} = req.body;

    board_name.forEach((element,index) => {
        if (!board_name[index].trim() || !passing_year[index].trim() || !percentage[index].trim()) {
            req.flash('error_education', 'Required all info of SSC,HSC education ');
             return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }
    });

    board_name.forEach((element,index) => {
        if((passing_year[index].trim().length < 4 || passing_year[index].trim().length >4) ){
            req.flash('error_education', 'Passing Year  have to be 4 digit ');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }else  if(!(/^\d+$/.test(passing_year[index].trim()))){
            req.flash('error_education', 'Passing Year have to be only digit');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }else if(!(/^\d+$/.test(percentage[index].trim()))){
            req.flash('error_education', 'Enter Percentage or CGPA in digit');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }
    });


    if ( !bachelor_cgpa || !bachelor_course_name || !bachelor_passing_year || !bachelor_university) {
        req.flash('error_education', 'Required all info of BECHLOR education ');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }


    if((bachelor_passing_year.trim().length < 4 || bachelor_passing_year.trim().length >4)){
        req.flash('error_education', 'Bachelor Passing Year  have to be 4 digit ');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }else  if( !(/^\d+$/.test(bachelor_passing_year.trim())) ){
        req.flash('error_education', 'Bachelor Passing Year have to be only digit');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }else if(!(/^\d+$/.test(bachelor_cgpa)) ){
        req.flash('error_education', 'Enter Bachelor  CGPA only  in digit');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }
    
    const {master_course_name,master_university,master_passing_year,master_cgpa} = req.body

        if (!(master_cgpa.trim() == '' && master_course_name.trim() == '' && master_passing_year.trim() == '' && master_university.trim() == '')) {
            if (master_cgpa.trim() == '' || master_course_name.trim() == '' || master_passing_year.trim() == '' || master_university.trim() == '') {
                req.flash('error_education', 'Fill All detail of master degree');
                return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
            }
        }


    const {company_name,work_experience_designation,from,to} = req.body;
   for (let i = 0; i < company_name.length; i++) {
    if (!(company_name[i].trim() == '' && work_experience_designation[i].trim()== '' && from[i].trim()=='' && to[i].trim() == '')){
        if (company_name[i].trim() == '' || work_experience_designation[i].trim() == '' || from[i].trim() == '' || to[i].trim() == '') {
            req.flash('error_experience', 'Required All Detail of work Experience if you have');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }else{
            if (from[i].length <=8) {
                req.flash('error_experience', 'Enter from date in valid form');
                return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
            }else{
                if (isNaN(new Date(from[i].trim()))) {
                    req.flash('error_experience', 'Enter from date in valid form');
                    return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
                }
            }
           if (to[i].length <=8) {
            req.flash('error_experience', 'Enter To date value in valid form');
                return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
           }else{
            if (isNaN(new Date(to[i].trim()))) {
                req.flash('error_experience', 'Enter To date value in valid form');
                return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
            }
           }
          
            
        }
    }
   }


   

    const {language} = req.body;
    if (!language) {
        req.flash('error_language', 'Required Atleast one language');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }

   for (let i = 0; i < language.length; i++) {
    if (!data[`${data.language[i]}_read`] && !data[`${data.language[i]}_write`] && !data[`${data.language[i]}_speak`]) {
        req.flash('error_language', 'Required Atleast one language opration for each selected language');
        return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
    }
   }

   const {technology} = req.body;
   if (technology) {
    for (let i = 0; i < technology.length; i++) {
        if (!data[`${data.technology[i]}_level`] && !data[`${data.technology[i]}_level` && !data[`${data.technology[i]}_level`]]) {
            req.flash('error_language', 'Required Atleast one technology level for each selected technology');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }
       }
   }
   


     
   const {referance_name,referance_number,referance_relation} = req.body;

   for (let i = 0; i < referance_name.length; i++) {
    if (!(referance_name[i].trim() == '' && referance_number[i].trim()== '' && referance_relation[i].trim()=='')){
        if (referance_name[i].trim() == '' || referance_number[i].trim()== '' || referance_relation[i].trim()==''){
            req.flash('error_referance', 'Required All Detail of referanced ');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }else{

            if(referance_number[i].trim().length < 10 || referance_number[i].trim().length >10){
                req.flash('error_referance', 'Mobile Number  have to be 10 digit');
                return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
            }else  if(!(/^\d+$/.test(referance_number[i]))){
                req.flash('error_referance', 'Mobile No have to be only digit');
                return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
            }
        }
    }
   }


  



   const {preferance_notice,preferance_expec_ctc,preferance_curr_ctc,prefered_location ,department} = req.body;

   if (!preferance_curr_ctc.trim() || !preferance_expec_ctc.trim() || !preferance_notice.trim() || !prefered_location.trim() || !department.trim()) {
    req.flash('error_preferance', ' Required preferances');
    return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
   }

        if(preferance_notice.trim().length >2){
            req.flash('error_preferance', 'Enter Notice Period in Digit less than 2');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }else  if(!(/^\d+$/.test(preferance_notice.trim()))){
            req.flash('error_preferance', 'Enter Notice Period in Digit');
            return res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
        }
   next()

} catch (error) {
    console.log(error)
}

   
}

module.exports  = validate;