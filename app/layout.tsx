import type { Metadata } from "next";
import { Nunito, Anton, Luckiest_Guy } from "next/font/google";
import "./globals.css";

// const nunito = Nunito({ subsets: ["latin"] });

const anton = Anton({subsets: ["latin"],
weight: "400",
variable: "--font-anton",})

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
});

export const metadata: Metadata = {
  title: "$Apepe",
  description: "African pepe on ethereum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.className} ${anton.variable} bg-myyellow relative`}>{children}</body>
    </html>
  );
}
