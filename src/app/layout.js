import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "42works — AI Visibility, Measurable",
  description:
    "Track how your clients show up across AI platforms. Uncover missed visibility and prove impact with data you can actually report.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} antialiased`}
    >
      <body className="font-sans">
        <LenisProvider>
          <div className="grain-overlay" aria-hidden="true" />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
