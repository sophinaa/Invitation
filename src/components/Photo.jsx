import { useState } from "react";

// Renders nothing if the photo hasn't been added yet.
export default function Photo({ src }) {
  const [failed, setFailed] = useState(false);
  return failed ? null : <img src={src} alt="" onError={() => setFailed(true)} />;
}
