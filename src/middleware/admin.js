const admin = ['ada', 'vim', 'greta', 'tim'];
module.exports = (req , res ,next) =>{
    if(admin.includes(req.query.user)){
        next()
    }else{
        res.redirect('/login?error=user')
    }
}