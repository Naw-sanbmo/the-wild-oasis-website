import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "The wild oasis",
};

export default function RootLayour({ children }) {
  return (
    <html lang="en">
      <body>
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
