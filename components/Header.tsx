import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-teal-400">
          MonPortfolio
        </h1>
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:text-teal-200">Accueil</Link></li>
          <li><Link href="/about" className="hover:text-teal-200">À propos</Link></li>
          <li><Link href="/projects" className="hover:text-teal-200">Projets</Link></li>
          <li><Link href="/contact" className="hover:text-teal-200">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
