import { Cormorant_Garamond, Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import AppWrapper from "./context/AppWrapper";
import LenisWrapper from "@/components/LenisWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import NavbarDropdown from "@/components/NavbarDropdown";
import ReactToastContainer from "@/components/ReactToastContainer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const script = Kaushan_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Larizo",
  description: "Fragrances",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisWrapper>
          <ScrollToTop />
          <ReactToastContainer>
            <AppWrapper>
              <Navbar />
              <NavbarDropdown />
              <Cart />
              {children}
            </AppWrapper>
          </ReactToastContainer>
        </LenisWrapper>
      </body>
    </html>
  );
}