const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema =  new mongoose.Schema({
  
    name: {
       type: String,
       required: true,
       validate(value)
        {
            if(!validator.isAlpha(value))
              {
                throw new Error('Please enter valid name');

              }


        }

    },

    email: {
        
        type: String,
        required: true,
        unique: true, 
        validate(value)
          {
              if(!validator.isEmail(value))
                {
                    throw new Error('Invalid Email ID');

                }

          }

    },
  
    password: {
       
        type: String,
        required: true,
        
        validate(value)
         {
            console.log(validator.isStrongPassword(value));
            if(!validator.isStrongPassword(value))
            {
                throw new Error('Enter Strong password');

            } 



         } 

       }    



});



userSchema.pre('save', async function(next) {
    try {



    
        const salt = await bcrypt.genSalt(10);
       const hashedpassword = await bcrypt.hash(this.password,salt);
       this.password = hashedpassword;
   
       next();
       
       }
      catch(error){
   
            next(error);
            console.log(this.error);
   
   
      }


});


userSchema.methods.matchPassword= async function(enteredPassword){
  
      return await bcrypt.compare(enteredPassword,this.password);


}


const User = mongoose.model('User',userSchema);


module.exports = User; 


