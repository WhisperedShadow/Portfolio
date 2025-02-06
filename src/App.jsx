import "./App.css";
import Header from "./Components/header/header.jsx";
import Cursor from "./Components/cursor/cursor.jsx";
import Routings from "./Components/Routes/Routings.jsx";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <Header />
      <Cursor />
      
      <HelmetProvider>
        <Routings />
      </HelmetProvider>
    </>
  );
}

export default App;
