import "./QrCode.css";
import qrcodeImage from "../../assets/images/image-qr-code.png";

function QrCode() {
  return (
    <div className="card-qrcode">
      <img src={qrcodeImage} alt="QR code image" />
      <div className="card-qrcode-content">
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCode;
