import "./globals.css";
import "nprogress/nprogress.css";
import { Inter } from "next/font/google";
import ProgressHandler from "@/Components/ProgressHandler";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });
const siteName = "Bony_Chops";

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: "Bony_Chopsのポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <Header />
        <ProgressHandler />
      </body>
    </html>
  );
}
