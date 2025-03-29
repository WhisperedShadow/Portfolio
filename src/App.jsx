import "./App.css";
import Header from "./Components/header/header.jsx";
import ChatBot from "./Components/ChatBot.jsx";
import Routings from "./Components/Routes/Routings.jsx";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <Header />
      <ChatBot />
      <HelmetProvider>
        <Routings />
      </HelmetProvider>
    </>
  );
}

export default App;
