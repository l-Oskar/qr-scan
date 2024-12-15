import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Question from "./Question";

const QRCodeScanner = (props) => {
  const [decodedText, setDecodedText] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "code",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        setDecodedText(decodedText);
      },
      (error) => {
        console.error(error);
      }
    );

    return () => {
      scanner.clear().catch((err) => console.error(err));
    };
  }, []);

  return (
    <div>
      <div id="code"></div>
      <Question
        state={props.state}
        decodedText={decodedText}
        updateNewMessageText={props.updateNewMessageText}
      />
    </div>
  );
};

export default QRCodeScanner;
