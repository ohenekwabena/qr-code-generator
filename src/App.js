import styled from "styled-components";
import QrCode from "./QrCode";

function App() {
  return (
    <Wrapper>
      <QrCode />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100dvh;

  & h1 {
    text-align: center;
  }
`;

export default App;
