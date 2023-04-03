import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { StylesProvider } from "./contexts/StylesContext";
import MobileApp from "./screens/MobileApp";

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <StylesProvider>
          <Routes>
            <Route path="/" element={<MobileApp />} />
          </Routes>
        </StylesProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
