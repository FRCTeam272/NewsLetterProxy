const sponsors = [
  { src: '/images/sponsors/asi.png', alt: 'ASI Drives', url: 'https://www.asidrives.com/' },
  { src: '/images/sponsors/Cannneers.png', alt: 'Cannoneers Club', url: 'https://www.cannoneersclub.com/' },
  { src: '/images/sponsors/CHRISLANDRETH INC LOGO.png', alt: 'Chris Landreth Inc' },
  { src: '/images/sponsors/comcast-nbcuniversal.png', alt: 'Comcast NBCUniversal', url: 'https://corporate.comcast.com/'},
  { src: '/images/sponsors/l3harris.png', alt: 'L3Harris', url: 'https://www.l3harris.com/' },
  { src: '/images/sponsors/lc.png', alt: 'Lansdale Catholic', url: 'https://www.lansdalecatholic.com/' },
  { src: '/images/sponsors/Vulcan-Spring-Logo-1-2000x634.png', alt: 'Vulcan Spring', url: 'https://www.vulcanspring.com/' },
];

export default function SponsorsSection() {
  return (
    <section className="sponsors-section">
      <h2 className="sponsors-title">Thank You to Our Sponsors</h2>
      <div className="sponsors-grid">
        {sponsors.map((s) => (
          s.url ? (
            <a href={s.url} target="_blank" rel="noopener noreferrer" key={s.alt}>
              <div className="sponsor-item">
                <img src={s.src} alt={s.alt} className="sponsor-logo" />
              </div>
            </a>
          ) : (
            <div key={s.alt} className="sponsor-item">
              <img src={s.src} alt={s.alt} className="sponsor-logo" />
            </div>
          )
        ))}
      </div>
    </section>
  );
}
