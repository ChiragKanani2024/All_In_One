const comboGenerate = require('./comboGenerate');
const insertHelper = require('../../databaseHelpers/insertHelper');



const insertController = ()=>{
    return {
                async getform(req,res){
                    try {
                        let genderRadio =await comboGenerate('gender_radio');
                        let relationShipCombo = await comboGenerate('relationship_combo');
                        let locationCombo = await comboGenerate('prefered_location_combo');
                        let departmentCombo = await comboGenerate('department_combo')
                        let statesCombo = await comboGenerate('state_combo');
                        
                        let combos = {genderRadio,relationShipCombo,locationCombo,departmentCombo,statesCombo}
                       let data={
                        company_name:[''],
                        work_experience_designation:[''],
                        from:[''],
                        to:[''],
                        referance_name:[''],
                        referance_number:[''],
                        referance_relation:['']
                       }
                        res.render("component/jobApplication/insertForm",{combos,data,layout:"layouts/job_application_layout.ejs"})
                    } catch (error) {
                        console.log(error)
                    }
               
            },
            async getform2(req,res){
                try {
                    let genderRadio =await comboGenerate('gender_radio');
                    let relationShipCombo = await comboGenerate('relationship_combo');
                    let locationCombo = await comboGenerate('prefered_location_combo');
                    let departmentCombo = await comboGenerate('department_combo')
                    let statesCombo = await comboGenerate('state_combo');
                    
                    let combos = {genderRadio,relationShipCombo,locationCombo,departmentCombo,statesCombo}
                    res.render("component/jobApplication/insertForm2",{combos,layout:"layouts/job_application_layout.ejs"})
                } catch (error) {
                    console.log(error)
                }
               
            },
            async insertData(req,res){
                let employee_id;
                try {
                    try {
                        let result = await insertHelper().basic_insert(req,res);
                         employee_id = result[0].insertId; 
                    } catch (error) {
                        res.send({alert:error.sqlMessage})
                    }
                
                    try {
                        await insertHelper().board_insert(req,res,employee_id);
                    } catch (error) {
                        res.send({alert:error.sqlMessage})
                    }

                    try {
                        await insertHelper().degree_insert(req,res,employee_id);
                    } catch (error) {
                        res.send({alert:error.sqlMessage})
                    }
                 
                    try {
                        await insertHelper().work_experience(req,res,employee_id);
                    } catch (error) {
                        res.send({alert:error.sqlMessage})
                    }
                    
                    try {
                        await insertHelper().language(req,res,employee_id);
                    } catch (error) {
                        res.send({alert:error.sqlMessage})
                    }
                
                    try {
                        await insertHelper().technology(req,res,employee_id);
                    } catch (error) {
                        res.send({alert:error.sqlMessage})
                    }
                    
                    try {
                        await insertHelper().reference(req,res,employee_id);
                    } catch (error) {
                        res.send({alert:error.sqlMessage})
                    }
                
               return res.send({alert:"Data inserted successfully"})
                } catch (error) {
                    console.log("hello",error)
                }
            }
    }
}

module.exports = insertController