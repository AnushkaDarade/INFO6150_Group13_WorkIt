const express = require('express');
const { registerUser, authUser} = require('../controllers/userController');
const User = require('../models/userModel');
const router = express.Router();

router.get('/getAll',async(req,res)=> {
    try{
         const users = await User.find();
         res.json(users);
 
    }catch(err)
      {
          res.send('Error' + err);
 
      }
    
 
 });


 router.delete('/delete/:email',async(req,res)=>{
    try{
      //const user = await User.findById(req.params.email);
      console.log("In Delete");
      const deleteEmail = req.params.email;
      console.log(deleteEmail);
      const user = User.findOne({email:deleteEmail});
      console.log(user);
     const u2 = await user.deleteOne();
     res.json(u2);
   
     
    }catch(err)
     {
       res.send('Error');
 
     }
 
 
 
 
 });
 
 
 //UPDATE
 router.put('/edit/:email',async(req,res) => {
 
   try{
    console.log("In Update");
     const updateEmail = req.params.email;
     console.log(updateEmail);
     var user = await User.findOne({email:updateEmail});
     console.log(user);
     if(user==null)
        {
              console.log("User not found");
              res.send("User not found");
 
        }
     else
     {
     user.name = req.body.name;
     
     user.password = req.body.password;
 
     const u2 = await user.save();
 
     res.json(u2);
   }  
 
   }catch(err)
    {
      
      res.send('Please enter valid name and password');
 
    } 
 
 
 });
 

router.route('/create').post(registerUser);

router.route('/login').post(authUser);



module.exports= router; 


