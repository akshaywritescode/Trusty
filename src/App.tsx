import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";

let isLoggedIn = false;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Landing />} />
      </Routes>
    </>
  );
}

export default App;
