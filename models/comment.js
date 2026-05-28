const mongoose= require('mongoose');
const postComment= new mongoose.Schema(
  { 
    comment:{
      type:String,
      required:true,
      maxlength:1000,
    },
  }
)

module.exports=mongoose.model("Post",postComment);