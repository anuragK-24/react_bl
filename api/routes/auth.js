const router = require("express").Router(); 
const User = require("../models/User");
const bcrypt = require("bcrypt");


//for register 

//when we are creatin then it should have "post" method. 
//for fetching the data we can use get 
router.post("/register",async(req,res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPass,
        })
    await newUser.save();
        console.log('TRY RAn')
         // await is asynch operation 
        res.status(200).json(newUser);
        //200 status meaning the user has been created 
    } catch (err) {
        console.log('catch RAn')
        console.log(err)
        res.status(500).json(err);  
    }
})
// here status 500 means that something is wrong with the mongoDB

//req is what we are sending to the server, and res what we are getting from the server 
// while doing asynch operation use try and catch block 


// for login 
router.post("/login", async(req,res) => {
    try {
        const user =await User.findOne({username : req.body.username});
        !user && res.status(400).json("Wrong credentials!")  

        const validated= await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong credentials!")
        
        const {password, ...others} =user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);  
    }
});

module.exports = router;