import { useState } from "react";
import QRCode from "react-qr-code";
import styled from "styled-components";

function QrCode() {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  function generateQRCode(value) {
    setQrCodeValue(value);
    setInputValue("");
  }

  return (
    <form onSubmit={() => generateQRCode(inputValue)}>
      <h1>QrCode</h1>
      <Actions>
        <input
          type="text"
          name="qrCode"
          id="qrCode"
          placeholder="Enter text to generate Code"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Generate</button>
      </Actions>
      <div>
        <QRCode id="qrCode" value={qrCodeValue} size={300} />
      </div>
    </form>
  );
}

const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  & input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  & button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    color: hsl(250, 10%, 50%);
    cursor: pointer;
  }
`;

export default QrCode;
