const mongoose= require('mongoose');
const postlike= new mongoose.Schema(
  {
    like:{
      type:Boolean,
      default:false,
    },
  }
)

module.exports=mongoose.model("Post",postlike);