import "./globals.css";
import { Inter } from "next/font/google";

import Nav from "./components/nav/page";
import Footer from "./components/footer/page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mark 1 Software",
  description:
    "Mark 1 Software is a software development company based in the Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
