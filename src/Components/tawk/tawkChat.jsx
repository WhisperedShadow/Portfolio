import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = import.meta.env.VITE_TAWK_TO_URL; 
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return null; 
};

export default TawkToChat;
