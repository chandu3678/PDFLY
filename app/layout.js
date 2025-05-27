import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick only what you use
  style: ["normal"],
  display: "swap",
});

export const metadata = {
  title: "PDFLY",
  description: "Merge your pdfs fast & easy way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>PDFOUPLE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        <NavBar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
