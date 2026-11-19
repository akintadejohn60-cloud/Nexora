const features = [
  { icon: "✦", title: "AI companion", text: "Think clearly, plan smarter, and get help moving forward." },
  { icon: "◷", title: "Your day, organized", text: "Bring tasks, priorities, and schedules into one calm space." },
  { icon: "◎", title: "Goals that move", text: "Turn big ambitions into small steps you can actually finish." }
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#"><span className="brand-mark">N</span>NEXORA</a>
        <div className="nav-links"><a href="#features">Features</a><a href="#about">About</a></div>
        <a className="nav-cta" href="#get-started">Get started <span>↗</span></a>
      </nav>

      <section className="hero wrap" id="about">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> YOUR LIFE. IN FOCUS.</div>
          <h1>Make room for<br /><span>what matters.</span></h1>
          <p className="hero-text">Your goals, plans, and everyday progress — brought together in one intelligent space. Less noise. More direction.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#get-started">Explore NEXORA <span>→</span></a>
            <a className="secondary-btn" href="#features">Discover more</a>
          </div>
          <div className="hero-note"><span className="avatars">✦ ◈ ◎</span> A clearer way to move forward.</div>
        </div>

        <div className="visual">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="dashboard-card">
            <div className="dash-top"><div><span className="dash-label">YOUR OVERVIEW</span><h3>Good things take focus.</h3></div><span className="date-pill">✧ TODAY</span></div>
            <div className="progress-panel">
              <div className="progress-head"><span>Weekly progress</span><strong>72%</strong></div>
              <div className="progress-track"><div /></div>
              <div className="progress-foot"><span>You're building momentum</span><span>↗ +12%</span></div>
            </div>
            <div className="task-heading"><span>YOUR PRIORITIES</span><span>03 ITEMS</span></div>
            <div className="task"><span className="check checked">✓</span><div><strong>Plan the week</strong><small>Personal · 9:00 AM</small></div><span className="task-tag done">DONE</span></div>
            <div className="task"><span className="check" /><div><strong>Work on your goals</strong><small>Growth · 11:30 AM</small></div><span className="task-tag">FOCUS</span></div>
            <div className="task"><span className="check" /><div><strong>Read for 20 minutes</strong><small>Learning · 6:00 PM</small></div><span className="task-tag">LATER</span></div>
            <div className="ai-tip"><span className="spark">✦</span><div><small>YOUR NEXORA INSIGHT</small><p>Small steps, repeated daily, create remarkable change.</p></div></div>
          </div>
          <div className="float-label"><span>✦</span> Progress, not pressure.</div>
        </div>
      </section>

      <section className="features wrap" id="features">
        <div className="section-intro"><div className="eyebrow">A BETTER WAY TO MOVE</div><h2>Everything in sync.<br /><span>Everything in reach.</span></h2></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.text}</p><span className="feature-arrow">↗</span></article>)}</div>
      </section>

      <section className="closing wrap" id="get-started"><div><div className="eyebrow">THE NEXT CHAPTER STARTS HERE</div><h2>Give your ideas<br />somewhere to go.</h2></div><a className="primary-btn" href="mailto:hello@nexora.app">Coming soon <span>↗</span></a></section>
      <footer className="footer wrap"><a className="brand" href="#"><span className="brand-mark">N</span>NEXORA</a><span>© 2026 NEXORA. Built for your next chapter.</span><span>Clarity in every step. ✦</span></footer>
    </main>
  );
}