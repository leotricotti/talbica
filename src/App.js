import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import Home from "./screens/Home";
import Loader from "./components/Loader";
function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
