import React, { useState } from "react";
import SuggestionsTable from "./SuggestionsTable";
import ClosableAlert from "./alert";

const SelectedFieldsDisplay = ({ data }) => {

  if (!data) return <p>No data available.</p>;

  const imageUrl = data?.input?.images?.[0];
  const datetime = data?.input?.datetime;
  const diseaseName = data?.result?.disease?.name;
  const isHealthy = data?.result?.is_healthy?.healthy;
  const healthProbability = data?.result?.is_healthy?.probability;
  const suggestions = data?.result?.disease?.suggestions;
  const isPlant = data?.result?.is_plant?.binary;
  const message = isHealthy ? "Healthy" : "not Healthy";
 

  const msgData = {msg:'Your plant status :'+ message, varient:'success'};


  return (
    <div className="p-4 border rounded shadow max-w-lg">
    
      {isPlant && 
      (<div>
      <ClosableAlert messageData={msgData}/>
        <SuggestionsTable suggestions={suggestions} />
      </div>)}

      {!isPlant && 
      (<div>
    No plant detected from the image.Try again.
      </div>)}

    </div>
  );
};

export default SelectedFieldsDisplay;
