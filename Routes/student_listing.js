const express = require("express");
const student_listing = express.Router();




const getData = require("../app/http/controllers/studentListing/getData").getData
const getDataCount = require("../app/http/controllers/studentListing/getData").getDataCount
const getattandenceCount = require("../app/http/controllers/studentListing/attandenceReport").getattandenceCount
const getattandence = require("../app/http/controllers/studentListing/attandenceReport").getattandence
const getResult = require("../app/http/controllers/studentListing/getResult").getResult
const getResultCount = require("../app/http/controllers/studentListing/getResult").getResultCount
const getStudentResult = require("../app/http/controllers/studentListing/studentResult")
const {searchByFilter,searchById} = require("../app/http/controllers/studentListing/searchStudent")
const session = require("express-session")

student_listing.use(session({ 
    secret: 'Your_Secret_Key', 
    resave: true, 
    saveUninitialized: true
})) 





// student.get("/pageComponent",async(req,res)=>{
//     try {
//         let limit = process.env.limit;
//         let offset = 0
//         if (req.query.page) {
//              offset = limit * (Number( req.query.page)-1)
//         }
      
//         let result = await getData(offset,limit);
        
//        res.render("index",{title:"Home",users:result[0],firstpage:1,lastpage:250})
//     } catch (error) {
//         console.log(error)
//     }
// })



student_listing.all("/searchById",searchById)
student_listing.all("/searchByFilter",searchByFilter)



student_listing.get("/",async(req,res)=>{
    try {
        let limit = process.env.limit;
        let DataCount = await getDataCount();
        let lastPage = DataCount/limit;
        let fields = ['first_name','first_name desc','last_name','last_name desc','city','city desc','age','age desc','pincode','pincode desc','created_date','created_date desc','id desc','id','email','email desc','mobile_no','mobile_no desc','aadhar_no','aadhar_no desc']
        if(req.query.orderby){
            if (fields.includes(req.query.orderby)) {
            req.session.orderby =  req.query.orderby;
          
            }else{
            req.session.orderby = 'id asc';
            }
        } 
       
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
        
        let result = await getData(offset,limit,req.session.orderby);
      
       res.render("component/studentListing/index",{title:"Home",users:result[0],firstpage:1,lastpage:lastPage,currentpage:page,TotalDataCount:DataCount,limit:limit,orderby:req.session.orderby,route:'',layout:"layouts/student_listing.ejs"})
    } catch (error) {
        console.log(error)
    }
})

student_listing.get("/attandenceReport",async(req,res)=>{
    try {
       
        let limit = process.env.limit;
        let DataCount = await getattandenceCount(req.session.filterbymonth,req)
     
      let lastPage = DataCount/limit;
      
    //    console.log(req.query.filterbymonth)
        if(req.query.filterbymonth){
            req.session.filterbymonth =  req.query.filterbymonth;
        }
       
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
        
        let result = await getattandence(offset,limit,req.session.filterbymonth,req);
      let split = (req.session.filterbymonth).split("-")

       res.render("component/studentListing/attandenceReport",{title:"Home",attandences:result,firstpage:1,lastpage:lastPage,currentpage:page,TotalDataCount:DataCount,limit:limit,filterbymonth:{year:split[0],month:split[1].padStart(2,0),full:req.session.filterbymonth},layout:"layouts/student_listing.ejs"})
   
    } catch (error) {
        console.log(error)
    }
})

student_listing.get("/getResult",async(req,res)=>{
    try {
       
        let limit = process.env.limit;
        let DataCount = await getResultCount()
      let lastPage = DataCount/limit;

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
        
        let result = await getResult(offset,limit);
       res.render("component/studentListing/resultReport",{title:"Home",firstpage:1,lastpage:lastPage,currentpage:page,TotalDataCount:DataCount,limit:limit,
    Result:result,layout:"layouts/student_listing.ejs"})

   
    } catch (error) {
        console.log(error)
    }
})


student_listing.get("/studentResult/:id",async(req,res)=>{
    try {
        let result = await getStudentResult(req.params.id);
       res.render("component/studentListing/studentResult",{title:"Home",Result:result.result1,attandences:result.attandence[0],layout:"layouts/student_listing.ejs"})
    } catch (error) {
        console.log(error)
    }
})








// student_listing.get("/pageComponent",(req,res)=>{
//     try {
    
//         res.render("pageComponent",{title:"Pagination",firstpage:1,lastpage:250})
//     } catch (error) {
//         console.log(error)
//     }
// })

module.exports = student_listing