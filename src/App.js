import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import CardModal from "./screens/CardModal";
import CardModalHeader from "./components/CardModalHeader";
import Home from "./screens/Home";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardModal />} />
        <Route path="/cardHeader" element={<CardModalHeader />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
