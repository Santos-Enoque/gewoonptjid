import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Modal from "./components/modals/modal";
import RegisterModal from "./components/modals/registerModal";
import ToasterProvider from "./providers/toasterProvider";
import LoginModal from "./components/modals/loginModal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saloon",
  description: "Saloon booking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal /> 
        <Navbar />
        {children}</body>
    </html>
  );
}
