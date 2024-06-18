export const Header = () => {
  return (
    <div className="bg-zinc-950/45 h-[12vh] shadow-sm shadow-neutral-900 fixed w-full backdrop-blur-sm z-10">
      <div className=" grid grid-cols-12 h-full items-center text-zinc-400 ">
        <div className=" col-span-3 font-overpass font-medium text-4xl pl-[150px] pt-[2px]">
          Akdev Saha
        </div>
        <div className=" col-span-9 font-extralight text-lg pr-[50px]">
          <div className="flex gap-8 justify-end px-[100px] font-serif  ">
            <div className="scale-125 duration-200 bg-stone-950/25 px-2 py-1 underline underline-offset-4 text-zinc-300">
              About
            </div>
            <div className="hover:scale-125 duration-200 hover:bg-stone-950/45 px-2 py-1 hover:underline underline-offset-4 hover:text-zinc-300">
              Blog
            </div>
            <div className="hover:scale-125 duration-200 hover:bg-stone-950/45 px-2 py-1 hover:underline underline-offset-4 hover:text-zinc-300">
              Newsletter
            </div>
            <div className="hover:scale-125 duration-200 hover:bg-stone-950/45 px-2 py-1 hover:underline underline-offset-4 hover:text-zinc-300">
              Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
