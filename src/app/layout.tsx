import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
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
      <body className="bg-zinc-800 text-zinc-50">
        <div className="h-screen flex flex-col overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="flex flex-1">
            <Aside />
            <div className="max-h-[calc(100vh-96px)] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full min-w-[calc(767px-288px)]">
              <Header />
              <div className="px-4 lg:px-8">{children}</div>

              <div className="pt-6 px-8">
                <div>footer</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
