const conn = require("../../../../mysql_connection");



const searchById = async(req,res)=>{
    try {
        let limit = process.env.limit;
        let idFilter ;
        // console.log(req.body.id)
        if (req.method == "POST") {
            // console.log("hello")
           idFilter = req.body.id!==''?`where id in (${req.body.id})`:``;
 
             req.session.filterByIdqueryCount =`select count(*) as count from Student_Master  ${idFilter} `
         }


         let fields = ['first_name','first_name desc','last_name','last_name desc','city','city desc','age','age desc','pincode','pincode desc','created_date','created_date desc','id desc','id','email','email desc','mobile_no','mobile_no desc','aadhar_no','aadhar_no desc']
         if(req.query.orderby){
            if (fields.includes(req.query.orderby)) {
            req.session.orderby =  req.query.orderby;
          
            }else{
            req.session.orderby = 'id asc';
            }
        } 
       
        
        
        let DataCount = await conn.query(req.session.filterByIdqueryCount)
        let lastPage = Math.ceil(DataCount[0][0].count/limit) 
       
      
       
        let page = 1;
        let offset = 0
        if (req.query.page) {
            if (/^\d+$/.test(req.query.page)) {
            if (Number( req.query.page)<=lastPage) {
            page =Number( req.query.page)
            offset = limit * (page-1)
            }
            }
        }
        
        if (req.method == "POST") {
            req.session.filterByIdquery = `select * from Student_Master ${idFilter}`
          }
      
        let result = await conn.query(`${req.session.filterByIdquery} order by ${req.session.orderby?req.session.orderby:"id"} limit ${limit} offset ${offset} `)

       res.render("component/studentListing/index",{title:"Home",users:result[0],firstpage:1,lastpage:lastPage,currentpage:page,TotalDataCount:DataCount[0][0].count,limit:limit,orderby:req.session.orderby,route:'student_listing/searchById',layout:"layouts/student_listing.ejs"})
    } catch (error) {
        console.log(error)
    }
    


}

const searchByFilter = async(req,res)=>{
    try {
        let limit = process.env.limit;

        let firstnameFilter;
        let lastnameFilter;
        let cityFilter;
        let genderFilter;
        let ageFilter;

        // console.log(req)
       
        if (req.method == "POST") {
        //    console.log("hello")
            firstnameFilter = req.body.firstname!==''?`first_name like '${req.body.firstname}%'`:`first_name like '%'`
            lastnameFilter = req.body.lastname!==''?`last_name like '${req.body.lastname}%'`:`last_name like '%'`
            cityFilter = req.body.city!==''?`city like '${req.body.city}%'`:`city like '%'`
            genderFilter = req.body.gender!==''?`gender = '${req.body.gender}'`:`gender like '%'`
            ageFilter = req.body.age!==''?`age = ${req.body.age}`:`true`;   


            req.session.filterqueryCount = `select count(*) as count from Student_Master where ${firstnameFilter} ${req.body.whereby} ${lastnameFilter} ${req.body.whereby} ${ageFilter} ${req.body.whereby} ${cityFilter} ${req.body.whereby} ${genderFilter}`
        }

        let DataCount = await conn.query(req.session.filterqueryCount)

    //  console.log(DataCount)
        let lastPage = Math.ceil(DataCount[0][0].count/limit) 
       
        let page = 1;
        let offset = 0
        if (req.query.page) {
            if (/^\d+$/.test(req.query.page)) {
            if (Number( req.query.page)<=lastPage) {
            page =Number( req.query.page)
            offset = limit * (page-1)
            }
            }
        }
        
      if (req.method == "POST") {
        req.session.filterquery = `select * from Student_Master where ${firstnameFilter} ${req.body.whereby} ${lastnameFilter} ${req.body.whereby} ${ageFilter} ${req.body.whereby} ${cityFilter} ${req.body.whereby} ${genderFilter} `
      }


      let fields = ['first_name','first_name desc','last_name','last_name desc','city','city desc','age','age desc','pincode','pincode desc','created_date','created_date desc','id desc','id','email','email desc','mobile_no','mobile_no desc','aadhar_no','aadhar_no desc']
      if(req.query.orderby){
         if (fields.includes(req.query.orderby)) {
         req.session.orderby =  req.query.orderby;
       
         }else{
         req.session.orderby = 'id asc';
         }
     } 
    
    //   console.log(req.session.filterquery)
        let result = await conn.query(`${req.session.filterquery} order by ${req.session.orderby?req.session.orderby:"id"}  limit ${limit} offset ${offset} `)

       

       res.render("component/studentListing/index",{title:"Home",users:result[0],firstpage:1,lastpage:lastPage,currentpage:page,TotalDataCount:DataCount[0][0].count,limit:limit,orderby:req.session.orderby,route:'student_listing/searchByFilter',layout:"layouts/student_listing.ejs"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    searchByFilter,
    searchById
}