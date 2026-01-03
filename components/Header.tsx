import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
