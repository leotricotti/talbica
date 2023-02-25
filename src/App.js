import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { StylesProvider } from "./contexts/StylesContext";
import Home from "./screens/Home";

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <StylesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </StylesProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
