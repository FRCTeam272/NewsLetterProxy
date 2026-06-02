import { notFound } from 'next/navigation';
import { newsletters } from '../../data/newsletter';
import NewsletterHeader from '../../components/NewsletterHeader';
import NewsSection from '../../components/NewsSection';
import NewsletterFooter from '../../components/NewsletterFooter';
import PrintButton from '../../components/PrintButton';
import ExportButton from '../../components/ExportButton';

export function generateStaticParams() {
  return newsletters.map((n) => ({ slug: n.slug }));
}

export default async function NewsletterPage({ params }) {
  const { slug } = await params;
  const newsletter = newsletters.find((n) => n.slug === slug);
  if (!newsletter) notFound();

  return (
    <div className="newsletter-page">
      <PrintButton />
      <ExportButton slug={slug} />
      <NewsletterHeader
        title={newsletter.title}
        tagline={newsletter.tagline}
        issue={newsletter.issue}
        date={newsletter.date}
      />
      <main className="newsletter-body">
        {newsletter.sections.map((section) => (
          <NewsSection
            key={section.id}
            title={section.title}
            content={section.content}
            bullets={section.bullets}
            images={section.images}
          />
        ))}
      </main>
      <NewsletterFooter
        text={newsletter.footer}
        links={newsletter.links}
        linktree={newsletter.linktree}
      />
    </div>
  );
}
