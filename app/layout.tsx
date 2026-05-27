import type { Metadata } from "next";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { Toolbar } from "@mui/material";


export const metadata: Metadata = {
  title: "Boxing Hub",
  description: "Plataforma Moderna de  Boxe",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <Toolbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
