import "./App.css";
import QRCodeScanner from "./QrCode";

const FreeDiv = () => {
  return <div className="freeDiv"></div>;
};

const App = (props) => {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
  };

  return (
    <div className="App">
      <FreeDiv />
      <QRCodeScanner
        state={props.state}
        updateNewMessageText={props.updateNewMessageText}
      />
    </div>
  );
};

export default App;
