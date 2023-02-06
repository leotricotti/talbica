import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import CardModal from "./screens/CardModal";
import Home from "./screens/Home";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":elementId" element={<CardModal />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
