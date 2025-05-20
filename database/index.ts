// import { connect, ConnectOptions } from "mongoose";

// const dbConnection = async () => {
//   try {
//     await connect(process.env.MONGO_URI!, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     } as ConnectOptions);
//     console.log("Mongo successfully connected");
//   } catch (error) {
//     console.log(error)
//   }
// }

// export default dbConnection;

import { connect, ConnectOptions } from "mongoose";

const dbConnection = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("MongoDB successfully connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default dbConnection;