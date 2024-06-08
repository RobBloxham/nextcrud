import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A Simple Crud App",
  description: "Refreshing my knowledge of Next.js and MongoDB by building a simple CRUD app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">
          {children}
          </div>
        </div>
        </body>
    </html>
  );
}
