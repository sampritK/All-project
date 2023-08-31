var Userdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{

}

//retrive and return all user
exports.find=(req,res)=>{
if(!req.body){
    res.status(400).send({message:"Content can not be empty!"});
    return;
}

const user =new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})

user
   .save(user)
   .then(data =>{
    res.send(data)
   })
   .catch(err =>{
    res.status(500).send({
        message:err.message || "Some error occurred while creating a create operation"
    });
   });
}

//update a new identified user by user id
exports.update=(req,res)=>{

}

//Delete a user with specifide user id in the request
exports.delete=(req,res)=>{

}