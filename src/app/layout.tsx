import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.scss";

const wix = Wix_Madefor_Display({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Юрий Грачёв",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={wix.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
