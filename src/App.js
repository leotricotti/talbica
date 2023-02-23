import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { PhotoModeProvider } from "./contexts/PhotoModeContext";
import { StylesProvider } from "./contexts/StylesContext";
import Home from "./screens/Home";

function App() {
  return (
    <DataProvider>
      <StylesProvider>
        <PhotoModeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PhotoModeProvider>
      </StylesProvider>
    </DataProvider>
  );
}

export default App;
