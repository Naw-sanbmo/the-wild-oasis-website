import Header from "./_components/Header";

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
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 py-12 px-8">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
