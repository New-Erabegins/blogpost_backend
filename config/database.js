require(dotenv).config();

const dbConnenct= () => {
  mongoose.connect(process.env.DATABASE_URL)
  .then(()=>{
    console.log("database connected successfully");
  })
  .catch((err)=>{
    console.error(err);
    process.exit(1);
  })

}
module.exports = dbConnenct;