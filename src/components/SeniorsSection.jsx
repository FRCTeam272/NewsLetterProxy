export default function SeniorsSection({ title, content, seniors, quote }) {
  return (
    <section className="news-section seniors-section">
      <h2 className="section-title">{title}</h2>

      {content && <p className="section-content">{content}</p>}

      {seniors && seniors.length > 0 && (
        <div className="seniors-grid">
          {seniors.map((senior, i) => (
            <figure key={i} className="senior-card">
              <img src={senior.image} alt={senior.name} className="senior-photo" />
              <figcaption className="senior-name">
                {senior.name}
                {senior.note && <span className="senior-note">{senior.note}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {quote && (
        <div className="senior-quote-block">
          <p className="senior-quote-label">Excerpts from Ella&rsquo;s Salutatorian Speech</p>
          <blockquote className="senior-quote">
            {quote.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </blockquote>
          <p className="senior-quote-attribution">{quote.attribution}</p>
        </div>
      )}
    </section>
  );
}
