import { useState } from "react";
import CaptureImage from "./CaptureImage";

function PhotoUpload() {
  const [capture, setCapture] = useState(false);
  return (
    <div>
      {capture && <CaptureImage />}
      {!capture && (
        <button className="submit" onClick={() => setCapture(true)}>
          Capture you class! 📷{" "}
        </button>
      )}
    </div>
  );
}

export default PhotoUpload;
