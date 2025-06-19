import { ThemeProvider } from "./providers/ThemeProvider";
import Login from "@/components/Login";

// Import fonts CSS
import "./fonts.css";
import Layout from "@/components/Layout";
import Header from "@/components/Header";

function App() {
  return (
    <ThemeProvider>
      {/* <Header /> */}
      <Layout>
        <Login />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
