import { Route, Routes } from "react-router-dom";
import SignupForm from "../Auth/SignUpForm";
import LoginForm from "../auth/LoginForm";




export default function Auth() {
  return (
    <main className="auth-layout" role="main" aria-label="Authentication pages">
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="*" element={<LoginForm />} />
      </Routes>
      <div class="decor-circle decor-circle--large" aria-hidden="true"></div>
    </main>
  );
}
