import Landing from "./Pages/Landing";
import Auth from "./Pages/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import Ticket from "./Pages/Ticket";
import Footer from "./components/Footer";
import { isAuthenticated } from "./store/Storage";

export default function App() {
  return (
    <div className="app-root">

      <main className="site-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <ProtectedRoute>
                <Ticket />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      

      <Footer />
    </div>
  );
}
