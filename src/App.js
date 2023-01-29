import { DataProvider } from "./contexts/DataContext";
import Home from "./screens/Home";

function App() {
  return (
    <DataProvider>
      <Home />;
    </DataProvider>
  );
}

export default App;
