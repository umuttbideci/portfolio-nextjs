import Navbar from "@/components/navbar";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Umut Bideci",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://ardaozyigit.info",
              "@type": "WebSite",
              name: "Umut Bideci",
              url: "https://ardaozyigit.info",
            }),
          }}
        />
      </Head>

      <body className="overflow-x-hidden">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
