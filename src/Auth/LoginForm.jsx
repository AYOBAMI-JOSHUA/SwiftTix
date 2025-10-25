import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../store/Storage";
import { useState } from "react";

function Toast({ text }) {
  if (!text) return null;
  return <p className="toast" role="status">{text}</p>;
}

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [toast, setToast] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setErr("");

        if (!email || !password) {
            setErr("Please enter email and password.");
            return;
        }

        const testUser = { email: "swift@gamil.com", password: "swift123" };
        const usersRaw = localStorage.getItem("ticketapp_users");
        const users = usersRaw ? JSON.parse(usersRaw) : [];

        const existing =
        (email === testUser.email && password === testUser.password) ||
        users.find(u => u.email === email && u.password === password);

        if (existing) {
            setSession({ token: "mock-token-abc", user: { email } });
            navigate("/dashboard");
            return;
        }

        setErr("Invalid credentials. Try signup or check email/password.");
        setToast("Login failed");
        setTimeout(() => setToast(""), 2500);
    }

    return (
        <section className="auth-box">
            <h2 className="auth-title">Login</h2>
            <form onSubmit={handleSubmit} noValidate aria-label="Login form">
                
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" value={password} onChange={e => setPassword(e.target.value)} />

                {err && <p className="error">{err}</p>}

                <div className="auth-actions">
                    <button className="btn-primary" type="submit">Login</button>
                    <Link to="/auth/signup" className="btn-outline">Sign up</Link>
                </div>

            </form>

            <Toast text={toast} />
            <p className="muted">Test credentials: swift@gamil.com / swift123</p>
        </section>
    );
}
