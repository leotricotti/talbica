import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { StylesProvider } from "./contexts/StylesContext";
import Home from "./screens/Home";

function App() {
  return (
    <DataProvider>
      <StylesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </StylesProvider>
    </DataProvider>
  );
}

export default App;
