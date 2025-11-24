import "./globals.css";
import { Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({ susbsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}){
  return(
    <html lang ="fr">
      <body className ={inter.className}>
        <header className ="border-b bg-white">
          <nav className ="max-w-4xl mx-auto p-4 flex items-center gap-6">
            <Link href ="/" className ="font-semibold">Accueil</Link>
            <Link href ="/projects">Projets</Link>
            <Link href ="/about">About</Link>
            <Link href ="/contact">Contact</Link>
          </nav>
        </header>
        





        </nav>





      </body>
    </html> 
  )
}
