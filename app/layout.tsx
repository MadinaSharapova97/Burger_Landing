import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Barlow_Condensed } from "next/font/google";
import Footer from "./components/Footer/Footer";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import './globals.css'

const barlow_Condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Burger | A healthy Food",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
