import { Hind_Siliguri, Cinzel } from 'next/font/google';
import { ThemeProvider } from "../site_context/ThemeContext";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
});

export const metadata = {
  metadataBase: new URL("https://chintabot.vercel.app"),
  title: "ChintaBot — নিশান ও সূর্যের জাদুকরী সৃষ্টি | বাংলা Akinator",
  description: "ChintaBot: নিশান ও সূর্যের তৈরি একটি জাদুকরী AI গেম যা মাত্র ২০টি প্রশ্নে আপনার মনের চরিত্র চিনে ফেলে। বাংলাদেশি ক্রিকেটার, এনিমে, বলিউড সব! বন্ধুর সাথে multiplayer এও খেলুন!",
  keywords: "akinator bangla, বাংলা গেম, AI গেম, নিশান ও সূর্যের গেম, nishan surjo, চরিত্র চেনার খেলা, multiplayer bangla game, gemini ai game",
  openGraph: {
    title: "ChintaBot — বাংলা Akinator 🧞",
    description: "ChintaBot একটি জাদুকরী AI গেম যা মাত্র ২০টি প্রশ্নে আপনার মনের চরিত্র চিনে ফেলে।",
    url: "https://chintabot.vercel.app", // Adjust if needed
    siteName: "ChintaBot",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChintaBot 🧞",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChintaBot — বাংলা Akinator 🧞",
    description: "জাদুকরী AI গেম যা আপনার মনের চরিত্র চিনে নেয়!",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#2d0a5e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning={true} className={`${hindSiliguri.variable} ${cinzel.variable}`}>
      <body className="font-bengali">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
