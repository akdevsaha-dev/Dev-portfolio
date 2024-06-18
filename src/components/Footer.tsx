export const Footer = () => {
  return (
    <div className="min-h-[60vh] w-full bg-gradient-to-r from-emerald-900 via-purple-900 to-pink-  pt-[70px]">
      <div className="h-full grid grid-cols-12 ">
        <div className="col-span-4 pl-[130px] pt-[120px]">
          <h1 className="text-white font-overpass font-medium text-[50px] ">
            Akdev Saha
          </h1>
        </div>
        <div className="col-span-8 text-white ml-20">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <div className="grid grid-cols-1 text-[20px] gap-7 pt-[130px] ">
                <div className="text-slate-400 font-medium ">Socials</div>
                <div className=" ">
                  <a
                    href="https://x.com/AkdevSaha"
                    className="underline-animation font-light "
                    target="_blank"
                  >
                    Twitter
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://www.linkedin.com/in/akdevsaha/"
                    className="underline-animation font-light"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="">
                  <a href="" className="underline-animation font-light">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-4 ">
              <div className="grid grid-cols-1 text-[20px] gap-7 pt-[130px]     ">
                <div className="text-slate-400 font-medium">Other</div>
                <div className=" ">
                  <a
                    href="https://github.com/Akdev24Jul"
                    className="underline-animation font-light"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                <div className=" ">
                  <a
                    href="https://leetcode.com/u/Akdev03jul/"
                    className="underline-animation font-light"
                    target="_blank"
                  >
                    Leetcode
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-4"></div>
          </div>
        </div>
      </div>
      <div className=" w-ful flex justify-center items-center mt-10">
        <div className="min-w-[80vw] min-h-[10vh] border-t border-gray-600 flex justify-center items-center text-white text-[18px] font-light">
          © 2024 Akdev Saha. All rights reserved
        </div>
      </div>
    </div>
  );
};
