import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { StylesProvider } from "./contexts/StylesContext";
import TableApp from "./screens/TableApp";

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <StylesProvider>
          <Routes>
            <Route path="/" element={<TableApp />} />
          </Routes>
        </StylesProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
