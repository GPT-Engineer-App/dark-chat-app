import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Messaging from "./pages/Messaging.jsx";
import Contacts from "./pages/Contacts.jsx";
import Multimedia from "./pages/Multimedia.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/multimedia" element={<Multimedia />} />
      </Routes>
    </Router>
  );
}

export default App;
