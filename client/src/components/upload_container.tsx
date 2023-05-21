import React from "react";
import Header from "./header";
import Btn from "./btn";

interface changeFunc {
  onChangeHandler: any;
}
function Upload_Container({ onChangeHandler }: changeFunc) {
  const handleDragStart = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnd = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="w-full"
     onDragEnter={handleDragStart}
      onDragLeave={handleDragEnd}
    >
      <Header title="Upload your image" />
      <p className="text-center my-4 font-[300] text-[12px]">
        File should be jpeg,jpg or png...
      </p>
      <div className="full w-full border-2 border-dashed border-blue-700 rounded bg-[#f7f8fc] p-4">
        <div className="flex justify-center">
          <div>
            <img
              className="w-[6rem] h-auto my-6"
              src="https://image-uploader-aa214.web.app/static/media/imageuploader.3710b8a3.svg"
            />
          </div>
        </div>
        <p className="text-center font-[300] py-6 text-[12px] text-[rgba(0,0,0,.4)]">
          Drag & Drop your image here
        </p>
        <input
          className="input"
          type="file"
          id="file"
          name="image"
          onChange={onChangeHandler}
          onDrop={onChangeHandler}
        />
      </div>
      <p className="text-center text-[16px] m-4 text-[rgba(0,0,0,.4)]">Or</p>
      <div className="flex justify-center">
        <div>
          <label
            htmlFor="file"
            className="bg-blue-500 hover:bg-blue-700 text-white font-[500] py-2 px-4 rounded-md"
          >
            Choose a file
          </label>
        </div>
      </div>
    </div>
  );
}
export default Upload_Container;
