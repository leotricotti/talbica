import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import Home from "./screens/Home";
import SearchBarHelp from "./components/SearchBarHelp";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBarHelp />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
