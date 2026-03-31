import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siber Güvenlik Farkındalık — Simav MYO",
  description: "Son kullanıcı güvenliği, siber zorbalık, sanal bahis ve sosyal mühendislik farkındalık sunumu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
