import React from "react";
import Image from "next/image";

const Improoves = () => {
  return (
    <div className="flex w-[1440px] h-[579px] mx-auto bg-[#1E85FE]/20 justify-around">
      <div className="relative w-[574px] h-[520px] mt-[-87px]">
        <div className="absolute w-[323px] h-[227px] shadow ml-0 mt-0">
          <Image
            width={500}
            height={500}
            src="/assets/images/image1.png"
            alt="image1"
          />
        </div>
        <div className="absolute w-[315px] h-[189px] shadow ml-[259px] mt-[156px] z-10">
          <Image
            width={500}
            height={500}
            src="/assets/images/image2.png"
            alt="image2"
          />
        </div>
        <div className="absolute w-[268px] h-[269px] shadow ml-[18px] mt-[251px]">
          <Image
            width={500}
            height={500}
            src="/assets/images/image3.png"
            alt="image3"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-[459px] h-[330px] my-auto">
        <h3 className="font-medium text-[36px]">Student results on LearnIt</h3>
        <p className="font-regular text-[24px]">
          87% of people who study to improve their skills report career benefits
          such as promotions, pay increases, or new career development
        </p>
        <div className="flex justify-between">
          <button className="w-[170px] h-[60px] rounded-[5px] bg-[#1E85FE] text-white font-medium text-[24px]">
            Get free
          </button>
          <button className="w-[272px] h-[60px] rounded-[5px] bg-white text-[#1E85FE] font-medium text-[24px] border-[#1E85FE] border-[2px]">
            Try for bussinsees
          </button>
        </div>
      </div>
    </div>
  );
};

export default Improoves;
