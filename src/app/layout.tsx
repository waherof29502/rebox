import '@/styles/globals.css';
import { fontMono, fontMontserrat, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React from 'react';

export const metadata = {
  title: 'landing page',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased overflow-hidden ',
          fontSans.variable,
          fontMontserrat.variable,
          fontMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
