import mongoose from "mongoose";

export const db = async () => {
  // async olarak tanımlayın
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Db connected");
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};
