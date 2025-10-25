import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { loadTickets } from "../store/Storage";

export default function Dashboard() {
  const tickets = loadTickets();
  const total = tickets.length;
  const open = tickets.filter(t => t.status === "open").length;
  const inProgress = tickets.filter(t => t.status === "in_progress").length;
  const closed = tickets.filter(t => t.status === "closed").length;

    return (
        <>
            <NavBar />

            <main className="site-container-inner dashboard" role="main">
                <header className="dashboard-header">
                    <h1>Dashboard</h1>
                    <p className="muted">Overview of your ticket activities</p>
                </header>

                <section className="stats-grid" aria-label="Ticket statistics">
                    <article className="stat-card">
                        <h3>Total Tickets</h3>
                        <p>{total}</p>
                    </article>

                    <article className="stat-card status-open">
                        <h3>Open</h3>
                        <p>{open}</p>
                    </article>

                    <article className="stat-card status-progress">
                        <h3>In Progress</h3>
                        <p>{inProgress}</p>
                    </article>

                    <article className="stat-card status-closed">
                        <h3>Closed</h3>
                        <p>{closed}</p>
                    </article>
                </section>

                <section className="dashboard-actions">
                    <Link to="/tickets" className="btn-primary">Manage Tickets</Link>
                </section>
            </main>
        </>
    );
}
