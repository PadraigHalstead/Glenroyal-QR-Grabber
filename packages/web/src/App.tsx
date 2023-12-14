import QRCode from "react-qr-code";
import './App.css';

function App() {

  return (
      <div>
        <h1>Fitsense QR Grabber</h1>
        <h3>Scan the QR below to get started</h3>
        <div className="card">
        <QRCode
        size={64}
        style={{ height: "auto", maxWidth: "25%", width: "25%" }}
        value={"e"}
        viewBox={`0 0 256 256`}
    />
        </div>
        <h4>or</h4>
        <h3>If you're on mobile</h3>
        <button>Open App</button>
      
      <p className="read-the-docs">
        Created by Padraig Halstead
      </p>
    </div>
  );
}

export default App;
