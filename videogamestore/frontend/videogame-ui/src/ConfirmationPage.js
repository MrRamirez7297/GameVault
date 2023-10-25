import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./ConfirmationPage.css";



function ConfirmationPage(){
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const [downloadCode, setDownloadCode] = useState("");
    const { cartItems } = useCart();

    const generateRandomCode = () => {
        const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 12; i++) {
          const randomIndex = Math.floor(Math.random() * char.length);
          code += char[randomIndex];
          if (i === 3 || i === 7) {
            code += "-";
          }
        }
        return code;
      };

      const handleGenerateCode = () => {
        const code = generateRandomCode();
        setDownloadCode(code);
        setIsCodeVisible(true);
      };

  return(
    <div className="title-c">
    <h1>THANK YOU!</h1>
    <p>Thank you for your purchase at GameVault!</p>
    <p>Please come back soon!</p>
    <h2>🎉</h2>
    <div className="download-code-box">
      {isCodeVisible ? (
        <div className="code-display">
          {downloadCode.split("-").map((part, index) => (
            <div key={index} className="code-part">
              {part}
            </div>
          ))}
        </div>
      ) : (
        <button className="code" onClick={handleGenerateCode}>Reveal Download Code</button>
      )}
    </div>
  </div>
  );
}

export default ConfirmationPage;