import { Route, Routes } from "react-router-dom";
import LoginForm from "../Auth/LoginForm";
import SignupForm from "../Auth/SignUpForm";


export default function Auth() {
  return (
    <main className="auth-layout" role="main" aria-label="Authentication pages">
        <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="*" element={<LoginForm />} />
        </Routes>
    </main>
  );
}
