import Aside from './components/Aside';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <Aside />
        <main className="flex-1 p-6">main</main>
      </div>
      <Footer />
    </div>
  );
}
