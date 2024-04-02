import "./globals.css";
import Navbar from "@/app/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}