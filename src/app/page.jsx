import Link from 'next/link';
import { newsletters } from '../data/newsletter';

export default function Home() {
  return (
    <main className="newsletter-index">
      <h1>Cyber Crusader Newsletters</h1>
      <ul>
        {newsletters.map((n) => (
          <li key={n.slug}>
            <Link href={`/${n.slug}`}>
              {n.title} — {n.date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
