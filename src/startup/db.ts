const mongoose=require('mongoose')
require('dotenv').config();


const startDB = async () => {
  try {
    const db = "mongodb+srv://nishu:astro@nodenishu.tl2ymec.mongodb.net/bill?retryWrites=true&w=majority";
    
    const con=await mongoose.connect(db,
    {
      useNewUrlParser:true,
		  useUnifiedTopology:true,
    })
    console.log(`MongoDB Connected:${con.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

export default startDB;
