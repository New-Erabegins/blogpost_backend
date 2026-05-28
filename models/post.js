const mongoose= require('mongoose');
const postSchema= new mongoose.Schema(
  {
    creator:{
      type:String,
      reqiured:true,
      maxLength:50,
    },
    title:{
      type:String,
      required:true,
      maxLength:50,
    },
    content:{
      type:String,
      required:true,
      maxlength:1000,
    },
    like:{
      type:Boolean,
      default:false,
    },
  }
)

module.exports=mongoose.model("Post",postSchema);