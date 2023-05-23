import { Schema, model } from "mongoose";

interface IUPhoto {
  id: String;
  filepath: String;
  label: String;
}
const schema = new Schema<IUPhoto>(
  {
    filepath: {
      type: String,
      default: "",
    },
    label:{
      type: String,
      default:""
    }
  },
  { timestamps: true }
);
const photoSchema = model<IUPhoto>("image-uploader", schema);

export default photoSchema;
