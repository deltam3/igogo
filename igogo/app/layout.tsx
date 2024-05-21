import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "아이고고 - 우리아이 맞춤 키즈클래스 플랫폼",
  description: "아이고고 | 아이에게 필요한 모든 클래스를 앱 하나로",
  openGraph: {
    title: "아이고고 - 우리아이 맞춤 키즈클래스 플랫폼",
    description: "아이고고 | 아이에게 필요한 모든 클래스를 앱 하나로b",
    url: "https://igogo.kr/",
    siteName: "아이고고",
    images: [
      {
        url: "https://igogo.kr/images/header/ogimage2.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
