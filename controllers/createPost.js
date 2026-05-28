//importing the post schema model
const Post = require('../models/Post');
//defining the route handler
exports.createPost = async(req,res)=>{

  try{
  const {creator,title,content}=req.body;

  //creating a new post and insesrting it in the data base
  const post = await Post.create({creator,title,content});

  res.status(200).json(
    {
      success:true,
      data:post,
      message:"post is online"
    }
  );
  }
  catch(error){
    console.log(error);
    res.status(500).json(
      {
        success:false,
        message:"post is not posted"
      }
    );
  }

}