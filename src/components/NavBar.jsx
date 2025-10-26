import { Link, useNavigate } from "react-router-dom";
import { clearSession, isAuthenticated } from "../store/Storage";
import { useState } from "react";

export default function NavBar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    function logout() {
        clearSession();
        navigate("/");
    }

    return (
        <header className="topbar" role="banner">
            <nav className="site-contain" role="navigation" aria-label="Main Navigation">
                
                <div className="nav-left">
                   <span className="brand">SwiftTix</span>
                </div>

                <ul className="nav-links desktop-nav">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/tickets">Tickets</Link></li>
                    {isAuthenticated() ? (
                        <li><button onClick={logout} className="logout-btn">Logout</button></li>
                    ) : (
                        <li><Link to="/auth/login">Login</Link></li>
                    )}
                </ul>

                <button
                    className="hamburger"
                    aria-expanded={menuOpen}
                    aria-label="Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

            </nav>

            {menuOpen && (
                <ul className="mobile-nav">
                    <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
                    <li><Link to="/tickets" onClick={() => setMenuOpen(false)}>Tickets</Link></li>
                    {isAuthenticated() ? (
                        <li><button onClick={() => { setMenuOpen(false); logout(); }} className="logout-btn">Logout</button></li>
                    ) : (
                        <li><Link to="/auth/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                    )}
                </ul>
            )}
        </header>
    );
}
