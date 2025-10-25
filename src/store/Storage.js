export const SESSION_KEY = "ticketapp_session";

export function setSession(tokenObj) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(tokenObj));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  const s = localStorage.getItem(SESSION_KEY);
  return s ? JSON.parse(s) : null;
}

export function isAuthenticated() {
  return !!getSession();
}




const TICKETS_KEY = "ticketapp_tickets";

export function loadTickets() {
  const s = localStorage.getItem(TICKETS_KEY);
  return s ? JSON.parse(s) : [];
}

export function saveTickets(tickets) {
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}
