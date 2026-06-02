import '../styles/newsletter.css';

export const metadata = {
  title: 'Cyber Crusader Newsletters',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
