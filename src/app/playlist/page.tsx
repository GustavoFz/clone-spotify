'use client';
import { SpotifyLogo } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Playlist() {
  return (
    <div className="flex flex-col mx-8 mb-6 ">
      <div className="flex h-1/3 max-h-[400px] min-h-[340px] items-end">
        <Image
          className="h-48 w-48 mr-6"
          src="/playlist-mix-1.jpg"
          width={320}
          height={320}
          alt=""
        ></Image>
        <div className="flex flex-col flex-1 justify-end">
          <span>Playlist</span>
          <span className="mt-2 text-8xl font-bold line-clamp-1">
            Daily Mix 1
          </span>
          <span className="line-clamp-2">
            Hugo & Guilherme, Henrique & Juliano, Israel & Rodolffo and more
          </span>
          <div className="mt-2">
            <SpotifyLogo size={24} color="#e3e3e3" weight="fill" />
          </div>
        </div>
      </div>
      <div className="flex-1">2</div>
    </div>
  );
}
