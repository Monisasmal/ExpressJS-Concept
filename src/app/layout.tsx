import "./globals.css";
import type { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Nodejs Guide",
  description: "Learn Nodejs step by step with clear concepts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-black ">
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}