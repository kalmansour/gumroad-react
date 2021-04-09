// Components
import Navbar from "./components/navabar/Navbar";
import Widget from "./components/widget/Widget";

// Styles
import { GlobalStyle } from "./components/widget/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Widget />
    </>
  );
}

export default App;
