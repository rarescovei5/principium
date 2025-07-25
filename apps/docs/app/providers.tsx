'use client';

import React from 'react';
import {ThemeProvider} from 'next-themes';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="dark"
      themes={['light', 'dark']}
    >
      {children}
    </ThemeProvider>
  );
}
