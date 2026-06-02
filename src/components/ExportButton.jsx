'use client';

export default function ExportButton({ slug }) {
  function handleExport() {
    const page = document.querySelector('.newsletter-page');
    if (!page) return;

    const clone = page.cloneNode(true);

    // Strip screen-only buttons from the exported document
    clone.querySelectorAll('.print-button').forEach((el) => el.remove());

    // Rewrite root-relative image paths to absolute URLs
    const origin = window.location.origin;
    clone.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('/')) {
        img.setAttribute('src', origin + src);
      }
    });

    // Inline all CSS from every loaded stylesheet
    let css = '';
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          css += rule.cssText + '\n';
        }
      } catch {
        // cross-origin sheet — skip
      }
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${document.title}</title>
  <style>${css}</style>
</head>
<body>
${clone.outerHTML}
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-${slug}.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button className="print-button" onClick={handleExport}>
      Export as HTML
    </button>
  );
}
