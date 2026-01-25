import "../../app/globals.css";
import { Navbar } from "@/components/Layout/Navbar/Navbar";
import { Footer } from "@/components/Layout/Footer/Footer";

export const metadata = {
  title: "e-Visa Portal",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
