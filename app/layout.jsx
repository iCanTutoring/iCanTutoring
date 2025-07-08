import "./globals.css";

export const metadata = {
  title: "iCanTutoring",
  description: "Achieve more with iCanTutoringg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
