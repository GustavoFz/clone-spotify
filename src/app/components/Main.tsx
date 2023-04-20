'use client';
import { CaretLeft, CaretRight, CaretUp } from '@phosphor-icons/react';
import SmallCard from './SmallCard';

export default function Main() {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center h-16 px-8 py-4">
        <div className="flex items-center gap-4 ">
          <button className="flex items-center justify-center bg-black/50 rounded-full w-8 h-8">
            <CaretLeft size={'20px'} />
          </button>
          <button className="flex items-center justify-center bg-black/30 rounded-full w-8 h-8">
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
              <img
                src="https://avatars.githubusercontent.com/u/29576822?v=4"
                alt=""
                className="h-7 w-7 rounded-full"
              />
              Gustavo
              <CaretUp size={16} weight="fill" className="mr-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="pt-6 px-8">
        <div className="mb-4">
          <h2 className="font-bold text-3xl">Good evening</h2>
        </div>
        <div className="grid grid-cols-2 gap-y-3 gap-x-6 ">
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
      </div>
      <div className="pt-6 px-8">
        <div>footer</div>
      </div>
    </div>
  );
}