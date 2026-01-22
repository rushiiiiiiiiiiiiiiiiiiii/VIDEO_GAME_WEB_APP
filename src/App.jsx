import { Routes, Route, Navigate } from "react-router-dom";
import Games from "./pages/Games/Games";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
