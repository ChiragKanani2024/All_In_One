const conn = require("../../../../mysql_connection");



const generate = async(unique_key,value)=>{
    try {
        let result = await conn.query(`select * from select_master where unique_key = '${unique_key}'`);
        let select = result[0][0];
        
            if (select.control_type == 'combo') {
                result = await conn.query(`select * from option_master where select_id = ${select.id}`)
                let data = result[0];
                let string = `<label >${select.name} :</label><select name=${select.name}><option>select ${select.name}</option>`
                data.forEach(element => {
                    string += `<option value=${element.value} ${element.value==value?`selected`:``}>${element.name}</option>`
                });
                string+="</select>";
                return string;
            }
    
            if (select.control_type == 'radio' || select.control_type == 'checkbox') {
                result = await conn.query(`select * from option_master where select_id = ${select.id}`)
                let data = result[0];
                let string = `<label >${select.name} :</label>`
                data.forEach(element => {
                    string += `<input type="${select.control_type}" ${element.value==value?`checked`:``} value=${element.value} name=${select.name}>${element.name} `
                });
                return string;
            }
    
    } catch (error) {
        console.log(error)
    }
   
}

const comboGenerate = async(req,res)=>{
    
    try {
        let combo = await generate(req.query.unique_key,req.query.val)

        res.render("component/delemeter_search/combo",{combo,layout:"plainLayout.ejs"})
 
    } catch (error) {
        console.log(error)
    }

 
}

module.exports = comboGenerate

