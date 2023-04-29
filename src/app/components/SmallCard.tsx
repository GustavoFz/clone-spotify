'use client';
import { PlayCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SmalCardProps {
  name: string;
  img: string;
}

export default function SmallCard(props: SmalCardProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/playlist')}
      className="flex items-center rounded-md bg-zinc-500/30 group cursor-pointer"
    >
      <Image
        width={640}
        height={640}
        src={props.img}
        alt=""
        className="h-16 w-16 lg:w-20 lg:h-20 rounded-l-md"
      />
      <div className="px-4 font-bold flex flex-1 items-center justify-between">
        <a className=" line-clamp-2">{props.name}</a>
        <div className="ml-2 opacity-0 group-hover:opacity-100 transition duration-300 drop-shadow-lg">
          <PlayCircle size={48} weight="fill" className="text-green-500" />
        </div>
      </div>
    </div>
  );
}
