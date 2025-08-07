import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function CameraCaptureUpload() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const handleUpload = () => {};

  return (
    <div>
      <h2>Camera Capture (PC & Mobile)</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
      />
      <button onClick={capture}>Capture</button>

      {image && (
        <div>
          <h4>Preview:</h4>
          <img src={image} alt="Captured" width="300" />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
}

export default CameraCaptureUpload;
