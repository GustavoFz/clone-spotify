'use client';
import { CaretDown, CaretLeft, CaretRight } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const route = useRouter();

  return (
    <div className=" bg-zinc-800 flex justify-between items-center h-16 w- px-4 lg:px-8 py-4 sticky top-0 w-auto">
      <div className="flex items-center gap-4 ">
        <button
          onClick={() => route.back()}
          className="flex items-center justify-center bg-black/50 rounded-full w-8 h-8"
        >
          <CaretLeft size={'20px'} />
        </button>

        <button
          onClick={() => route.forward()}
          className="flex items-center justify-center bg-black/30 rounded-full w-8 h-8"
        >
          <CaretRight size={'20px'} />
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <div>
          <button className="border border-zinc-500 rounded-3xl px-[15px] h-8 py-[3px] font-bold text-sm">
            Upgrade
          </button>
        </div>
        <div>
          <button className=" flex items-center bg-black/50 p-[2px] rounded-full font-bold text-sm gap-2 h-8">
            <Image
              width={320}
              height={320}
              src="/foto-perfil.jpg"
              alt=""
              className="h-7 w-7 rounded-full"
            />
            Gustavo
            <CaretDown size={16} weight="fill" className="mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
