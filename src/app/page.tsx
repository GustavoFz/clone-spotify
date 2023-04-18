import Aside from './components/Aside';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <Aside />
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
