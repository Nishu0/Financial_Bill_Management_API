const mongoose=require('mongoose')
require('dotenv').config();


const startDB = async () => {
  try {
    const db = "mongodb+srv://nishu:astro@nodenishu.tl2ymec.mongodb.net/bill?retryWrites=true&w=majority";
    mongoose.connect(db).then(() => {
      console.log("Connected to database");
    });
  } catch (err) {
    console.error(err);
  }
};

export default startDB;
