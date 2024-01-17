import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remake Desafio ShareEnergy",
  description:
    "Recriação do desafio para vaga de estagiário fullstack da ShareEnergy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
