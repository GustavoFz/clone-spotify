import './globals.css';

export const metadata = {
  title: 'Clone Spotify',
  description: 'This is a Spotify clone',
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
