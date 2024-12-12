import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { VerifyEmail } from "./pages/auth/verify/VerifyEmail";
import { VerifySeed } from "./pages/auth/verify/VerifySeed";


let isLoggedIn = false;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Landing />} />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify">
            <Route path="email" element={<VerifyEmail />} />
            <Route path="seed" element={<VerifySeed />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
