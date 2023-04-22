import { Play } from '@phosphor-icons/react';

interface CardProps {
  type: string;
  name: string;
  imgCard: string;
  imgPodcast?: string;
  nameAlbum?: string;
  description?: string;
  release: string;
  time: number;
}

export default function Card(props: CardProps) {
  return (
    <div className="p-4 bg-black/50 rounded-md cursor-pointer group hover:bg-zinc-700/50 transition duration-300">
      <div>
        <div className="relative pb-[100%] mb-4">
          <img src={props.imgCard} alt="" className="rounded-md absolute" />
          {props.type === 'new-podcast' ? (
            <img
              src={props.imgPodcast}
              alt=""
              className="rounded h-10 w-10 absolute bottom-[-6px] left-[-6px]"
            />
          ) : (
            ''
          )}

          <div className="ml-2 opacity-0 group-hover:opacity-100 transition group-hover:-translate-y-2 duration-300 drop-shadow-lg absolute bottom-0 right-2">
            <button className="flex bg-green-500 h-12 w-12 items-center justify-center rounded-full pr-[2px]">
              <Play size={24} weight="fill" className="text-black" />
            </button>
          </div>
        </div>
        <div className="min-h-[62px]">
          <a href="" className="line-clamp-1 font-bold pb-1">
            <span className="bg-blue-500 h-2 w-2 mt-1 mr-2 inline-block rounded"></span>
            {props.name}
          </a>
          <div>
            <span className="text-[12px] pt-2">
              {props.release} · {props.time} Min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
