export default function NewsletterHeader({ title, tagline, issue, date }) {
  return (
    <header className="newsletter-header">
      <div className="header-logo-row">
        <img src="/images/logo.png" alt="Cyber Crusaders logo" className="header-logo" />
      </div>
      <h1 className="header-title">{title}</h1>
      {tagline && <p className="header-tagline">{tagline}</p>}
      <div className="header-meta">
        {issue && <span>{issue}</span>}
        <span>{date}</span>
      </div>
      <hr className="header-rule" />
    </header>
  );
}
