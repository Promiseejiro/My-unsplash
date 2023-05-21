import { url } from "inspector";
import mongoose from "mongoose";
interface Idb {
  useNewURlParser: boolean;
  useCreateIndex: boolean;
  useFindAndModify: boolean;
  useUnifiedTopology: boolean;
}
const connectDb = (url: string) => {
  return mongoose
    .connect(url, {})
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((error) => {
      console.log("erro during connection");
    });
};
export default connectDb;
