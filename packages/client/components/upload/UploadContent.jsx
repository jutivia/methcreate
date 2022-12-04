import Button from "../header/Button";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const UploadContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [thumbnail, setThumbnail] = useState({});
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "video/*",
    onDrop: (acceptedFiles) => {
      setFiles([]);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      {console.log(file.preview.split("blob:")[1])}
      <video
        className="w-full rounded-[5px]"
        height="100%"
        width="100%"
        id="video"
        src={file.preview}
        type="video/mp4"
        controls
      />
    </div>
  ));
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const handleSubmit = () => {
    console.log(title, description, tags);
    console.log(files);
  };

  return (
    <div className="mt-4 flex gap-6 flex-col justify-between lg:flex-row px-4">
      <div className="w-full ">
        <div>
          <h4 className="text-lg">Details</h4>
          <p>Provide the following information below to upload video</p>
        </div>
        <div className="mt-4">
          <label>Title (required) *</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full mt-2 outline-none border-[1px] p-2 bg-transparent border-[#2E2E2E] rounded"
          />
        </div>
        <div className="mt-4">
          <label>Description </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={4}
            placeholder="Tell your viewers everything about this video"
            className="w-full mt-2 outline-none border-[1px] p-2 bg-transparent border-[#2E2E2E] rounded"
          />
        </div>

        <div className="mt-4">
          <label>Tags </label>
          <input
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            className="w-full mt-2 outline-none border-[1px] p-2 bg-transparent border-[#2E2E2E] rounded"
          />
        </div>
        <div className="mt-4">
          <h4 className="text-lg">Thumbnail</h4>
          <p>Select and upload apicture that shows what’s in your video</p>
        </div>
      </div>
      <div className="w-[679px] px-2">
        <div>
          <p>Upload your video</p>
          <div
            {...getRootProps({ className: "dropzone" })}
            className="w-full mt-2 flex justify-center items-center border-[1px] border-[#2E2E2E] min-h-[317px]"
          >
            {files.length > 0 ? (
              <video
                className="w-full rounded-[5px]"
                height="100%"
                width="100%"
                id="video"
                src={files[0].preview.split("blob:")[1]}
                type="video/mp4"
                controls
              />
            ) : (
              <>
                <input {...getInputProps()} />
                <div className="text-center">
                  <p>Drag 'n' drop some files here</p>
                  <Button text="Select file" />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="text-sm mt-3">
          <p className="">
            By submitting your videos to Metacreate, you acknowledge that you
            agree to Metacreate's{" "}
            <a className="text-[#6EF6C6]">Terms of Service</a> and{" "}
            <a className="text-[#6EF6C6]">Community Guidelines.</a>
          </p>
          <p className="mt-2">
            {" "}
            Please be sure not to violate others' copyright or privacy rights.
          </p>
        </div>
        <Button
          style="w-full mt-4"
          onClickHandle={() => {
            handleSubmit();
          }}
          text="Publish"
        />
      </div>
    </div>
  );
};

export default UploadContent;
