import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
import { Sora } from 'next/font/google'

//👇 Configure our font object
const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: 'AviRana',
  description: 'I try to make cool stuff in my freetime'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={`p-4 ${sora.className}`}>
        <Navbar />
        {children}
        </main>
        </body>
    </html>
  );
}
