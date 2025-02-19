import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Broker",
  description: "Gerenciador de compra e venda de ações",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen flex flex-col`}>
        <div className="container mx-auto px-4 flex flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
