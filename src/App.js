import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import Home from "./screens/Home";
import CardModal from "./screens/CardModal";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardModal />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
