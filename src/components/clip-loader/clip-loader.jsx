



import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
  
};

const clipLoader = ({loading}) => {
  

  return (
    

      <ClipLoader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    
  );
}

export default clipLoader;