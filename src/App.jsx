import { useState } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/common/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onFinish={() => setIsLoading(false)} />;
  }

  return <AppRoutes />;
}

export default App;
