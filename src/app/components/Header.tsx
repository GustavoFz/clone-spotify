'use client';
import { CaretDown, CaretLeft, CaretRight } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { login, logout } from '../../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function Header() {
  const route = useRouter();
  const currentUser = useAppSelector((state) => state.userReducer.currentUser);
  const dispatch = useAppDispatch();

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
          {currentUser ? (
            <button className="border border-zinc-500 rounded-3xl px-[15px] h-8 py-[3px] font-bold text-sm">
              Upgrade
            </button>
          ) : (
            <button className="px-[15px] h-8 py-[3px] font-bold text-sm text-gray-400 hover:font-extrabold hover:text-white transition">
              Sign up
            </button>
          )}
        </div>
        <div>
          {currentUser ? (
            <button
              onClick={() => dispatch(logout())}
              className=" flex items-center bg-black/50 p-[2px] rounded-full font-bold text-sm gap-2 h-8"
            >
              <Image
                width={320}
                height={320}
                src="/foto-perfil.jpg"
                alt=""
                className="h-7 w-7 rounded-full"
              />
              {currentUser.name}
              <CaretDown size={16} weight="fill" className="mr-2" />
            </button>
          ) : (
            <button
              onClick={() => dispatch(login())}
              className=" flex items-center bg-white text-black p-[2px] rounded-full font-bold text-sm gap-2 h-8"
            >
              <span className="py-2 px-8 ">Login</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
