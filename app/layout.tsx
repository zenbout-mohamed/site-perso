import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio développeur web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
        <body className="bg-gray-900 text-teal-300 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-6 py-10">
            {children}
            </main>
            <Footer />
        </body>
        </html>
  );
}
