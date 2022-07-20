import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
  })
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.log(err));
