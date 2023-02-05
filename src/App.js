import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import Home from "./screens/Home";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
