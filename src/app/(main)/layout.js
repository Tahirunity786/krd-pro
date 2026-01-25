import Navbar from "@/components/Layout2/Navbar/Navbar";
import "../../app/globals.css";
import Footer  from "@/components/Layout2/Footer/Footer";


export const metadata = {
  title: "Food Recipe Blog | P2cart",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
