import SideBar from '@/app/(main)/components/SideBar'
import TopBar from "@/app/(main)/components/TopBar";
import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contador de Gente',
  description: 'Contador de Gente',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='bg-white'>
      <body className={inter.className}>
        <div className='flex h-screen w-fit'>
          <SideBar />
          <TopBar />
          {children}
        </div>
        </body>
    </html>
  )
}
