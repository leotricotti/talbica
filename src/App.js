import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { PhotoThemeprovider } from "./contexts/PhotoThemeContext";
import { StylesProvider } from "./contexts/StylesContext";
import Home from "./screens/Home";

function App() {
  return (
    <DataProvider>
      <StylesProvider>
        <PhotoThemeprovider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PhotoThemeprovider>
      </StylesProvider>
    </DataProvider>
  );
}

export default App;
