import { JetBrains_Mono } from 'next/font/google';

import './globals.css'
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'AviRana',
  description: 'I try to make cool stuff in my freetime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <script src="https://kit.fontawesome.com/c57dc26725.js" crossorigin="anonymous"></script>
      </head>
      <body className={`md:flex md:flex-row ${jetbrains_mono.className} flex flex-col h-full`}>
      <Sidebar />
      <main className="bg-[#181818] m-4 md:w-rounded border-2 border-slate-600 border-solid m-h-full h-[95vh] md:w-full">
        <div className="p-1 border-b-2 border-slate-600 border-solid flex justify-between align-baseline">
        <Link href="/"><i class="fa-solid fa-chevron-left"></i></Link>
          <small>avirana.com</small>
          <i class="fa-regular fa-square"></i>
          </div>
        <section className="p-3">
        {children}
        </section>
      </main>
        </body>
    </html>
  )
}
