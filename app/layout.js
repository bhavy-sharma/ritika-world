// app/layout.jsx
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext"; // Import Context

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Store | Products & Services",
  description: "The best place to buy products and hire services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-textMain`}>
        <AuthProvider> {/* Wrap everything here */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}