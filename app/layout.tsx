import type { Metadata } from "next";
import "./globals.css";

// متادیتا برای سئو
export const metadata: Metadata = {
  title: "خانه‌ی دوست",
  description: "کارت‌پستال‌های خانه‌ی دوست",
};

// روت‌لی‌اوت ریسپانسیو و راست‌چین
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className="
          antialiased 
          leading-relaxed 
          min-h-screen 
          flex flex-col 
          items-center 
          text-base sm:text-lg
        "
      >
        <main className="w-full  ">{children}</main>
        <footer className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} خانه‌ی دوست
        </footer>
      </body>
    </html>
  );
}
