import { Route, Routes } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../Auth/SignUpForm";




export default function Auth() {
  return (
    <main className="auth-layout" role="main" aria-label="Authentication pages">
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="*" element={<LoginForm />} />
      </Routes>
      <div class="decor-circle decor-circle--large" aria-hidden="true"></div>
    </main>
  );
}
