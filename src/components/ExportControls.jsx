'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PrintButton from './PrintButton';
import ExportButton from './ExportButton';

function Controls({ slug }) {
  const searchParams = useSearchParams();
  if (searchParams.get('export') !== 'true') return null;
  return (
    <>
      <PrintButton />
      <ExportButton slug={slug} />
    </>
  );
}

export default function ExportControls({ slug }) {
  return (
    <Suspense>
      <Controls slug={slug} />
    </Suspense>
  );
}
