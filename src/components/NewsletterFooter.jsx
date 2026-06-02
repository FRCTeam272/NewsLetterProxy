'use client';

import { QRCodeSVG } from "qrcode.react";

const icons = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  ),
};

export default function NewsletterFooter({ text, links, linktree }) {
  return (
    <footer className="newsletter-footer">
      <hr className="footer-rule" />

      <div className="footer-body">
        <div className="footer-left">
          {links && links.length > 0 && (
            <nav className="footer-links" aria-label="Social links">
              {links.map(({ label, url, icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span className="footer-link-icon">{icons[icon]}</span>
                  <span className="footer-link-label">{label}</span>
                </a>
              ))}
            </nav>
          )}
          <p className="footer-text">{text}</p>
        </div>

        {linktree && (
          <div className="footer-qr">
            <a
              href={linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-qr-link"
              aria-label="Scan QR code to visit our Linktree"
            >
              <QRCodeSVG
                value={linktree}
                size={80}
                fgColor="#134d13"
                bgColor="#ffffff"
                level="M"
              />
            </a>
            <p className="footer-qr-label">Scan to find us online</p>
          </div>
        )}
      </div>
    </footer>
  );
}
