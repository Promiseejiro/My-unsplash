import React, { useState, useEffect } from "react";
import axios from "axios";
import Upload_Container from "./upload_container";
import ImagePreview from "./preview";
import Loader from "./loader";
interface CurrentStep {
  choseFile: Boolean;
  uploading: Boolean;
  preview: Boolean;
  imageUrl: String;
  title: String;
  percent: Number;
  previewText: String;
}
const Container = () => {
  //states
  const [currentState, setCurrentState] = useState<CurrentStep>({
    choseFile: true,
    uploading: false,
    preview: false,
    imageUrl: "",
    title: "Copy",
    percent: 0,
    previewText: "Uploading...",
  });

  //functions
  const onUploadProgress = (event: any) => {
    if (event) {
      const { loaded, total } = event;
      let percent = Math.floor((loaded / total) * 100);
      setCurrentState({
        ...currentState,
        choseFile: false,
        uploading: true,
        preview: false,
        percent: percent,
      });
      console.log(loaded);
      // if (loaded === total) {
      //   setCurrentState({ ...currentState, previewText: "Retriving image" });
      // }
    }
  };

  // note it`s the input tag that prevent the browser from opening the dropped file in another tab when file is dropped
  const onChangeHandler = async (e: any) => {
    try {
      const formdata = new FormData();
      if (e.target.files) {
        const imagefile = e.dataTransfer
          ? e.dataTransfer.files[0]
          : e.target.files[0];
        console.log(imagefile);
        formdata.append("filepath", imagefile);
        const res = await axios.post("https://image-uploader-api-3.onrender.com/upload", formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress,
        });
        if (res) {
          setCurrentState({
            ...currentState,
            imageUrl: res.data.filepath,
            choseFile: false,
            uploading: false,
            preview: true,
          });
        }
      }
    } catch (err) {
      alert(err);
    }

    console.log("drop");
  };
  const copyHandler = () => {
    navigator.clipboard.writeText(`${currentState.imageUrl}`);
    setCurrentState({ ...currentState, title: "Copied" });
  };
  return (
    <div className="main_container bg-white my-auto  p-6 rounded">
      {currentState.choseFile && (
        <Upload_Container onChangeHandler={onChangeHandler} />
      )}
      {currentState.preview && (
        <ImagePreview
          imageUrl={currentState.imageUrl}
          onclickHandler={copyHandler}
          title={currentState.title}
        />
      )}
      {currentState.uploading && (
        <Loader
          previewTeXt={currentState.previewText}
          percent={`${currentState.percent}`}
        />
      )}
    </div>
  );
};
export default Container;
