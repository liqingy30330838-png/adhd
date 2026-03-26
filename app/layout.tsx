import "./globals.css";

export const metadata = {
  title: "ADHD Support Hub",
  description: "Home-School-Community Support Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
