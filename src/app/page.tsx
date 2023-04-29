'use client';
import Card from './components/Card';
import SmallCard from './components/SmallCard';

interface smallCardProps {
  name: string;
  img: string;
}

interface cardProps {
  imgPodcast: string;
  type: string;
  imgCard: string;
  name: string;
  release: string;
  time: number;
}

export default function Home() {
  const dataSmallCard: smallCardProps[] = [
    {
      name: 'Ícaro e Gilmar • 2023 ⭐ Lançamentos e Melhores',
      img: '/album-icaro-e-gilmar.jpg',
    },
    {
      name: 'YOU',
      img: '/album-ali-gatie.jpg',
    },
    {
      name: 'NerdCast',
      img: '/album-jovem-nerd.jpg',
    },
    {
      name: 'Gustavo Lima - Imortal',
      img: '/album-gustavo-lima.jpg',
    },
  ];

  const dataCard: cardProps[] = [
    {
      imgPodcast: '/album-jovem-nerd.jpg',
      type: 'new-podcast',
      imgCard: '/album-la-no-bunker.jpg',
      name: 'Lá do Bunker 92 - E nessa loucura',
      release: 'Apr 17',
      time: 41,
    },
  ];

  return (
    <div className="px-4 lg:px-8 overflow-auto">
      <section className="pt-4">
        <div className="mb-4">
          <h2 className="font-bold text-3xl">Good evening</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
          {dataSmallCard.map((item, index) => (
            <SmallCard name={item.name} img={item.img} key={index} />
          ))}
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
          {dataCard.map((item, index) => (
            <Card
              imgPodcast={item.imgPodcast}
              type={item.type}
              imgCard={item.imgCard}
              name={item.name}
              release={item.release}
              time={item.time}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
