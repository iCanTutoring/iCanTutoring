import './globals.css';

export const metadata = {
  title: "iCan Tutoring",
  description: "Personalised English tutoring for KS2, KS3, and KS4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
