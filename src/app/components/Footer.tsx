'use client';

import {
  Devices,
  HeartStraight,
  MicrophoneStage,
  PictureInPicture,
  Play,
  Queue,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  SpeakerHigh,
} from '@phosphor-icons/react';

export default function Footer() {
  return (
    <div className="flex items-center bg-zinc-800 border-t border-zinc-700 px-4 h-[90px] min-w-[768px]">
      <div className="flex items-center basis-1/3 ">
        <img src="/album-gustavo-lima.jpg" alt="" className="h-14 w-14" />
        <div className="flex flex-col mx-4">
          <div className="flex items-center ">
            <span className=" leading font-medium">Dance Monkey</span>
          </div>
          <span className="text-xs text-zinc-400 font-semibold">
            Tones And I
          </span>
        </div>
        <button className="h-8 w-8 flex justify-center items-center">
          <HeartStraight size={20} />
        </button>
        <button className="h-8 w-8 flex justify-center items-center">
          <PictureInPicture size={20} />
        </button>
      </div>
      <div className="basis-1/3">
        <div className="flex justify-center mb-2 gap-4">
          <div className="flex flex-1 justify-end gap-2">
            <button className="h-8 w-8 flex justify-center items-center">
              <Shuffle size={20} weight="fill" />
            </button>
            <button className="h-8 w-8 flex justify-center items-center">
              <SkipBack size={20} weight="fill" />
            </button>
          </div>
          <button className="h-8 w-8 flex justify-center items-center bg-white rounded-full text-black">
            <Play size={18} weight="fill" />
          </button>
          <div className="flex flex-1 justify-start gap-2">
            <button className="h-8 w-8 flex justify-center items-center">
              <SkipForward size={20} weight="fill" />
            </button>
            <button className="h-8 w-8 flex justify-center items-center">
              <Repeat size={20} weight="fill" />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center text-[0.6875rem] gap-2">
          <div className="w-10 text-right">0:30</div>
          <div className="h-1 bg-zinc-600 w-16 rounded  flex-1">
            <div className="h-1 bg-white w-8 rounded"></div>
          </div>
          <div className="w-10 text-left">2:30</div>
        </div>
      </div>
      <div className="basis-1/3 flex justify-end">
        <div>
          <button className="h-8 w-8 flex justify-center items-center">
            <MicrophoneStage size={20} />
          </button>
        </div>
        <div>
          <button className="h-8 w-8 flex justify-center items-center">
            <Queue size={20} />
          </button>
        </div>
        <div>
          <button className="h-8 w-8 flex justify-center items-center">
            <Devices size={20} />
          </button>
        </div>
        <div className="flex items-center">
          <button className="h-8 w-8 flex justify-center items-center">
            <SpeakerHigh size={20} />
          </button>
          <div className="flex group h-1 bg-white rounded-lg">
            <input
              type="range"
              className="h-1 w-20 rounded-lg invisible group-hover:visible group-hover:bg-green-600  "
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
