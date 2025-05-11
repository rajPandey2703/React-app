import { useState, useRef } from "react";
import DefaultImage from "../images/upload-photo-here.png";
import plantImg from "../images/plant.jpg";
import EditIcon from "../images/edit.svg";
import UploadingAnimation from "../images/uploading.gif";

const ImageUploader = () => {
  const [avatarURL, setAvatarURL] = useState(plantImg);
  const [message, setMessage] = useState();
  const [link, setLink] = useState();
  const fileUploadRef = useRef(null);

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  }

  const uploadImageDisplay = async () => {
    try {
      setAvatarURL(UploadingAnimation);
      const uploadedFile = fileUploadRef.current.files[0];
      //const cachedURL = URL.createObjectURL(uploadedFile);
      //setAvatarURL(cachedURL);

      const formData = new FormData();
      formData.append("file", uploadedFile);

      const response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
        method: "post",
        body: formData
      });

      if (response.status === 201) {
        const data = await response.json();
        setAvatarURL(data?.location);
        setMessage('Click to see uploded image');
        setLink(data?.location);
      }

    } catch(error) {
      console.error(error);
      setAvatarURL(DefaultImage);
    }
}


  return (
    <div className="relative h-96 w-96 m-8">
     
      
      <img
        style={{ width: 500, height: 300 }}
        src={avatarURL}
        alt="Avatar"
        className="h-96 w-96 rounded-full"
      />

      <form id="form" encType="multipart/form-data">
        <button
         onClick={handleImageUpload}
          type="submit"
          className="flex-center absolute bottom-12 right-14 h-9 w-9 rounded-full"
        >
          <img src={EditIcon} alt="Edit" className="object-cover" />
          Upload image
        </button>
        <input type="file" id="file" hidden
        ref={fileUploadRef}
        onChange={uploadImageDisplay} />
      </form>
     <a href={link} target="_blank">{message}</a> 
    </div>
  );
};

export default ImageUploader;
