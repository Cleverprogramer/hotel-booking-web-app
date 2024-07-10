import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import SiteHeader from "@/components/shared/Header/Config";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/reactquery";

// 🔥 all css that we inject in our layout
import "./globals.css";
import "@/fonts/font-awesome/css/line-awesome.css";
import "@/styles/index.scss";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HBA - The best place you can find your awesome rooms.",
  description:
    "Discover the most outstanding hotels. Get quality bookings quickly.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className=" bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SessionProvider session={session}>
          <ReactQueryProvider>
            <SiteHeader />
            {children}
            <Footer />
            <Toaster />
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
