import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MicrosoftClarity from "@/metrics/MicrosoftClarity";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Rizzazzle Repairs",
  description: "Installation, Repairs, & Maintenance AV Installations, electronic repairs, and general maintenance Schedule an Installation! Our Services Installation services for all audio-visual tech equipment! Security Systems, Digital Signage, TV Mounting, Surround Sound Systems and more! Learn More! Get In Touch We are proud to provide our services and will never use chatbots or automated phone systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MicrosoftClarity />
      </body>
      
    </html>
  );
}
