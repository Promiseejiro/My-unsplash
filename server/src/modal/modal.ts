import { Schema, model } from "mongoose";

interface IUpload {
  id: String;
  filepath: String;
  label: String;
}
const schema = new Schema<IUpload>(
  {
    id: {
      type: String,
      default: "",
    },
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
const uploadSchema = model<IUpload>("image-uploader", schema);

export default uploadSchema;
