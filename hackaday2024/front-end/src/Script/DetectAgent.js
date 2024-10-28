import React from "react";
import { useEffect } from "react";

export default function DetectMobile() {
  const [isMobile, setMobile] = React.useState(false);

  useEffect(() => {
    const UA =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const isMobile = Boolean(
      UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
      ),
    );
    setMobile(isMobile);
  }, []);

  return isMobile;
}