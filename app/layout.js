import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s The wild oasis",
    default: "Welcome / The wild oasis",
  },
  description:
    "Luxulious Cabin Hotel, located in the heart of Tokyo, surrounded by famous tourist attractions",
};

export default function RootLayour({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>the-wild-oasis@naw all right reserved 2026</footer>
      </body>
    </html>
  );
}
