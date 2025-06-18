import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import Login from "@/components/Login";

// Import fonts CSS
import "./fonts.css";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-b-surface1 font-inter text-body-1 text-t-primary antialiased min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
