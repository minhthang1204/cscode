import { connect, ConnectOptions } from "mongoose";

const dbConnection = async () => {
  try {
    await connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Mongo successfully connected");
  } catch (error) {
    console.log(error)
  }
}

export default dbConnection;
