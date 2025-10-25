import { Link } from "react-router-dom";


export default function Landing() {
  return (
    <>
      <main className="hero" role="main" aria-labelledby="hero-heading">
        <div className="site-wrapper hero-inner">
          <section className="hero-copy" aria-labelledby="hero-heading">
            <h1 id="hero-heading">SwiftTix</h1>
            <p className="lead">Manage tickets fast — create, update, and track issues with ease.</p>

            <div className="cta-row" role="group" aria-label="Call to action">
              <Link to="/auth/login" className="btn-primary">Login</Link>
              <Link to="/auth/signup" className="btn-outline">Get Started</Link>
            </div>
          </section>

          <aside className="hero-visual" aria-hidden="true">
            <div className="circle circle-1" />
            <div className="circle circle-2" />
          </aside>
        </div>

        <svg className="wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C360,90 1080,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" opacity="0.35" />
        </svg>
      </main>

      <section className="features" aria-labelledby="features-heading">
        <div className="site-wrapper">
          <h2 id="features-heading" className="sr-only">Features</h2>

          <div className="features-grid" role="list">
            <article className="feature-card" role="listitem" aria-labelledby="f1-title">
              <h3 id="f1-title">Create &amp; Track Tickets</h3>
              <p>
                Create tickets quickly and assign status. Keep a clear backlog and follow progress through every stage until resolution.
              </p>
            </article>

            <article className="feature-card" role="listitem" aria-labelledby="f2-title">
              <h3 id="f2-title">Stay Organized &amp; Efficient</h3>
              <p>
                Manage priorities, track timelines, and resolve issues faster with a clean, focused workflow built for teams.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
