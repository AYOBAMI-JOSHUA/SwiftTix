import {useState} from "react";
import NavBar from "../components/NavBar";
import { loadTickets, saveTickets } from "../store/Storage";


const STATUS = ["open", "in_progress", "closed"];

function TicketForm({ onSave, initial = {}, onCancel }) {
    const [title, setTitle] = useState(initial.title || "");
    const [status, setStatus] = useState(initial.status || "open");
    const [description, setDescription] = useState(initial.description || "");
    const [errors, setErrors] = useState({});

    function validate() {
        const err = {};
        if (!title.trim()) err.title = "Title is required";
        if (!STATUS.includes(status)) err.status = "Invalid status";
        if (description && description.length > 1000) err.description = "Description too long";
        setErrors(err);
        return Object.keys(err).length === 0;
    }

    function submit(e) {
        e.preventDefault();
        if (!validate()) return;
        onSave({
            title: title.trim(),
            status,
            description: description.trim()
        });
    }

    return (
        <form onSubmit={submit} className="ticket-form">
            <label>Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            {errors.title && <p className="error">{errors.title}</p>}

            <label>Status</label>
            <select value={status} onChange={e => setStatus(e.target.value)}>
                {STATUS.map(s => (
                <option key={s} value={s}>{s}</option>
                ))}
            </select>
            {errors.status && <p className="error">{errors.status}</p>}

            <label>Description (optional)</label>
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
            />

            <div className="form-actions">
                <button className="btn-primary" type="submit">Save</button>
                {onCancel && <button type="button" className="btn-ghost" onClick={onCancel}>Cancel</button>}
            </div>
        </form>
    );
}

export default function Ticket() {
    const [tickets, setTickets] = React.useState(loadTickets());
    const [editing, setEditing] = React.useState(null);
    const [toast, setToast] = React.useState("");

    React.useEffect(() => {
        saveTickets(tickets);
    }, [tickets]);

    function createTicket(data) {
        const newTicket = {
            id: crypto.randomUUID(),
            ...data,
            createdAt: Date.now()
        };
        setTickets([newTicket, ...tickets]);
        triggerToast("Ticket created");
    }

    function updateTicket(id, changes) {
        setTickets(tickets.map(t => (t.id === id ? { ...t, ...changes } : t)));
        setEditing(null);
        triggerToast("Ticket updated");
    }

    function deleteTicket(id) {
        if (!confirm("Delete this ticket?")) return;
        setTickets(tickets.filter(t => t.id !== id));
        triggerToast("Ticket deleted");
    }

    function triggerToast(msg) {
        setToast(msg);
        setTimeout(() => setToast(""), 2000);
    }

    return (
        <>
            <NavBar />
            <main className="site-container-inner">
                <header>
                   <h1>Tickets</h1>
                </header>

                <section className="tickets-layout">
                    <section className="tickets-create">
                        <h2>Create Ticket</h2>
                        <TicketForm onSave={createTicket} />
                    </section>

                    <section className="tickets-list">
                        <h2>All Tickets</h2>

                        {tickets.length === 0 && <p>No tickets yet.</p>}

                        <div className="cards">
                            {tickets.map(t => (
                                <article className="ticket-card" key={t.id}>
                                    <div className="ticket-head">
                                        <strong>{t.title}</strong>
                                        <span className={`tag tag-${t.status}`}>{t.status}</span>
                                    </div>

                                    {t.description && <p>{t.description}</p>}

                                    <footer className="ticket-meta">
                                        <small>{new Date(t.createdAt).toLocaleString()}</small>
                                        <div className="card-actions">
                                            <button onClick={() => setEditing(t)} className="btn-outline">Edit</button>
                                            <button onClick={() => deleteTicket(t.id)} className="btn-danger">Delete</button>
                                        </div>
                                    </footer>
                                </article>
                            ))}
                        </div>

                        {editing && (
                        <div className="edit-modal" role="dialog" aria-modal="true">
                            <h3>Edit Ticket</h3>
                            <TicketForm
                                initial={editing}
                                onSave={(data) => updateTicket(editing.id, data)}
                                onCancel={() => setEditing(null)}
                            />
                        </div>
                        )}
                    </section>
                </section>

                {toast && <div className="toast">{toast}</div>}
            </main>
        </>
    );
}
