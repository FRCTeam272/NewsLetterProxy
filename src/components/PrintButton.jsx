'use client';

export default function PrintButton() {
  return (
    <button className="print-button" onClick={() => window.print()}>
      Save as PDF / Print
    </button>
  );
}
