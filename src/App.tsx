import { ThemeProvider } from "./providers/ThemeProvider";
import Login from "@/components/Login";

// Import fonts CSS
import "./fonts.css";

function App() {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
}

export default App;
