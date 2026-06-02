export default function NewsSection({ title, content, bullets, images }) {
  const hasImages = images && images.length > 0;

  return (
    <section className="news-section">
      <h2 className="section-title">{title}</h2>

      {hasImages && (
        <div className={`section-images section-images--${images.length}`}>
          {images.map((img, i) => (
            <figure key={i} className="section-figure">
              <img src={img.src} alt={img.alt} className="section-image" />
              {img.caption && (
                <figcaption className="section-caption">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {content && <p className="section-content">{content}</p>}

      {bullets && bullets.length > 0 && (
        <ul className="section-bullets">
          {bullets.map((bullet, i) => {
            const text = typeof bullet === 'string' ? bullet : bullet.text;
            const url = typeof bullet === 'object' ? bullet.url : null;
            return (
              <li key={i}>
                {url ? <a href={url} target="_blank" rel="noopener noreferrer">{text}</a> : text}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
