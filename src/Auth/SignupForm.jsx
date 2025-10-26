import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../store/Storage";

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setErr("");

        if (!email || !password) {
            setErr("Email and password required.");
            return;
        }

        const usersRaw = localStorage.getItem("ticketapp_users");
        const users = usersRaw ? JSON.parse(usersRaw) : [];

        if (users.find(u => u.email === email)) {
            setErr("User already exists. Please login.");
            return;
        }

        users.push({ email, password });
        localStorage.setItem("ticketapp_users", JSON.stringify(users));
        setSession({ token: "mock-token-abc", user: { email } });
        navigate("/dashboard");
    }

    return (
        <section className="auth-box">
            <h2 className="auth-title">Sign up</h2>
            <form onSubmit={handleSubmit} noValidate aria-label="Signup form">
                
                <label htmlFor="signup-email">Email</label>
                <input id="signup-email" type="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" value={password} onChange={e => setPassword(e.target.value)} />

                {err && <p className="error">{err}</p>}

                <div className="auth-actions">
                    <button className="btn-primary" type="submit">Sign up</button>
                    <Link to="/auth/login" className="btn-outline">Login</Link>
                </div>

            </form>
        </section>
    );
}
