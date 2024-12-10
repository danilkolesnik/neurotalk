import localFont from "next/font/local";
import "../assets/globals.css";
import { Header } from "@component/components/Header";
import { Sidebar } from "@component/components/Sidebar";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NeuroTalk",
  description: "Automatize your business!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className='w-full'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
