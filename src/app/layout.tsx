import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Get Fit With Asif | ISSA & INFS Certified Fitness & Nutrition Coach",
  description:
    "Lose fat, build muscle, and become your best self with personalized meal and workout plans by Asif Ali Raza, ISSA & INFS Certified Coach.",
  openGraph: {
    title: "Get Fit With Asif | 90-Day Transformation Coaching Plan",
    description:
      "Lose Fat | Build Muscle | Become Your Best Self. Science-backed, sustainable fitness coaching tailored to your lifestyle.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Fit With Asif | 90-Day Transformation Coaching Plan",
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
      className={`${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
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
