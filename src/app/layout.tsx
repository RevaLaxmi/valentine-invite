import "./globals.css";

export const metadata = {
  title: "Valentine Invite 💖",
  description: "A cute interactive Valentine’s invite",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
