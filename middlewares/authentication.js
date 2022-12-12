const jwt= require("jsonwebtoken");

const authenticate=(req,res,next)=>{
    const token= req.headers?.authorization?.split(" ")[1];
    if(token){
        const decoded= jwt.verify(token,'hush')
        if(decoded){
            const userID= decoded.userID
            req.body.userID= userID
            // console.log(decoded)
            next()
        }
        else{
            res.send("Pls, login")
        }
    }
    else{
        res.send("Pls, login")
    }
}

module.exports= {authenticate}