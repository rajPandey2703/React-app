import React, { useState } from "react";
import axios from "axios";
import SelectedFieldsDisplay from "./SelectedFieldsDisplay";
import UploadingAnimation from "../images/Spinner-2.gif";
import ClosableAlert from "./alert";
//https://admin.kindwise.com/credits
const PlantHealthCheck = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPlant, setIsPlant] = useState(false);
  const [messageData, setMessageData] = useState(null);
  const [loadingImg, setLoadingImg] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    setResult(null);
    setLoadingImg(true);
    setMessageData(null);

    const formData = new FormData();
    formData.append("images", image);

    try {
      const response = await axios.post(
        "https://plant.id/api/v3/health_assessment",
        formData,
        {
          headers: {
            "Api-Key": "jukMHM3pXJj5YVkcZcPZBXD8wGL8PeZriPinwuwE9AfahQvv2T", // Replace with your actual key
          },
        }
      );

      setResult(response.data);
      setIsPlant(response.data?.is_plant);
    } catch (error) {
      console.error("Error during plant health check:", error);
      setMessageData({ msg: "Failed to analyze the plant image.", varient:'danger' });
    } finally {
      setLoading(false);
      setLoadingImg(false);
    }
  };

  return (
    <div className="center">
      <div
        className="mt-2"
        style={{
          border: "1px solid black",
          paddingTop: "20px",
          paddingRight: "30px",
          paddingBottom: "20px",
          paddingLeft: "80px",
        }}
      >
        <input type="file" onChange={handleImageChange} />

        <button
          type="button"
          className="btn btn-success"
          onClick={handleUpload}
          disabled={!image}
        >
          {loading ? "Analyzing..." : "Check Health"}
        </button>
      </div>
      {loadingImg && (
        <img
          style={{ width: 80, height: 80 }}
          src={UploadingAnimation}
         
        />
      )}

      {messageData && (
        <ClosableAlert messageData ={messageData}/>
      )}

      {result && (
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h5 className="text-lg font-semibold mb-2">Uploaded Image</h5>
            <img
              src={result.input.images[0]}
              alt="Plant"
              className="mt-2 max-w-sm border rounded shadow"
              style={{ width: 500, height: 300 }}
            />
          </div>
          <div style={{ width: "50%" }}>
            <h5 className="text-lg font-semibold mb-2">Health Summary</h5>

            <SelectedFieldsDisplay data={result} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantHealthCheck;
