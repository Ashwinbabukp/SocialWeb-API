const router = require("express").Router();
const User = require("../models/User");

//register

router.get("/register", async (req,res)=>{
    const user = await new User({
        username:"ashwin",
        email:"ashwinkp@gmail.com",
        password:"ashwin@2002"


    })
    

    await user.save();
    res.send("ok");
      
});

module.exports = router;