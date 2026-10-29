import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Fit With Asif | ISSA & INFS Certified Fitness & Nutrition Coach",
  description:
    "Lose fat, build muscle, and become your best self with personalized meal and workout plans by Asif Ali Raza, ISSA & INFS Certified Coach.",
  openGraph: {
    title: "Get Fit With Asif | 12-Week Transformation Coaching Plan",
    description:
      "Lose Fat | Build Muscle | Become Your Best Self. Science-backed, sustainable fitness coaching tailored to your lifestyle.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Fit With Asif | 12-Week Transformation Coaching Plan",
    description:
      "Lose Fat | Build Muscle | Become Your Best Self. Science-backed, sustainable fitness coaching tailored to your lifestyle.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 selection:bg-emerald-200 selection:text-emerald-900 min-h-screen flex flex-col">
        {children}
        <Script
          src="/crm-lead-tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
