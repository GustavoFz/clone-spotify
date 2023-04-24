import Card from './components/Card';
import SmallCard from './components/SmallCard';

export default function Home() {
  return (
    <div className="px-4 lg:px-8">
      <section className="pt-4">
        <div className="mb-4">
          <h2 className="font-bold text-3xl">Good evening</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
          <SmallCard name="NerdCast" img="/album-jovem-nerd.jpg" />
          <SmallCard
            name="Ícaro e Gilmar • 2023 ⭐ Lançamentos e Melhores"
            img="/album-icaro-e-gilmar.jpg"
          />
          <SmallCard name="YOU" img="/album-ali-gatie.jpg" />
          <SmallCard
            name="Gustavo Lima - Imortal"
            img="/album-gustavo-lima.jpg"
          />
        </div>
      </section>
      <section className="pt-4">
        <div className="flex items-center mb-4">
          <h2 className="font-bold text-2xl flex-1">
            <a href="" className="hover:underline">
              Episodes for you
            </a>
          </h2>

          <a href="" className="hover:underline font-bold text-sm">
            Show all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-3 gap-x-6">
          <Card
            imgPodcast="/album-jovem-nerd.jpg"
            type="new-podcast"
            imgCard="/album-la-no-bunker.jpg"
            name="Lá do Bunker 92 - E nessa loucura"
            release="Apr 17"
            time={41}
          />
          <Card
            imgPodcast="/album-jovem-nerd.jpg"
            type="new-podcast"
            imgCard="/album-la-no-bunker.jpg"
            name="Lá do Bunker 92 - E nessa loucura"
            release="Apr 17"
            time={41}
          />
          <Card
            imgPodcast="/album-jovem-nerd.jpg"
            type="new-podcast"
            imgCard="/album-la-no-bunker.jpg"
            name="Lá do Bunker 92 - E nessa loucura"
            release="Apr 17"
            time={41}
          />
          <Card
            imgPodcast="/album-jovem-nerd.jpg"
            type="new-podcast"
            imgCard="/album-la-no-bunker.jpg"
            name="Lá do Bunker 92 - E nessa loucura"
            release="Apr 17"
            time={41}
          />
        </div>
      </section>
    </div>
  );
}
