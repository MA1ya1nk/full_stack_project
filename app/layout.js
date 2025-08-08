import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Chai - Fund your projects with chai",
  description: "This website is a crowdfunding platform for devlopers to fund their projects with chai.",
  icon: "/favicon-xl.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.png" /> */}
        <link rel="icon" href={metadata.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href={inter.url} />
      </head>
      <body className={inter.className}>
        <SessionWrapper>
          <Navbar />
          <div className="text-white min-h-[85.1vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          {children}
          </div>
          <Footer />
        </SessionWrapper>
        </body>
    </html>
  );
}
