const HomeController = ()=>{
    return{
        getHome(req,res){
           
            res.render('component/home')
        }
    }
}

module.exports = HomeController