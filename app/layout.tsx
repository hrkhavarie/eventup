import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// layout for all app
const poppins = Poppins({ 
  subsets: ["latin"] , 
  weight:['400' , '500' , '600' , '700'],
  variable:'--font-poppins',
});


export const metadata: Metadata = {
  title: "Event up",
  description: "Event up is a platform for event management ",
  icons:{
    icon: '/assets/images/logo.svg'
  }
};
// layout for all app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
