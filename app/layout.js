import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "The wild oasis",
};

export default function RootLayour({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-700">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
      <footer>the-wild-oasis@naw all right reserved 2026</footer>
    </html>
  );
}
