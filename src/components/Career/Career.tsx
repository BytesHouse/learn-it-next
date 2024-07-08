import React from "react";
import image7 from "../../images/image7.png";
import Image from "next/image";

const Career = () => {
  return (
    <div className="flex justify-between px-[120px] gap-[69px] w-[1440px] h-[552px] bg-[#1E85FE]/20 mx-auto">
      <div className="flex flex-col justify-between h-[449px] my-auto">
        <p className="text-[26px] font-semibold text-[#103662]">
          Develop your career
        </p>
        <h2 className="text-[36px] font-medium">
          Choose the best program for you
        </h2>
        <p className="text-[24px] font-regular">
          Get a bachelor&apos;s or master&apos;s degree online from a leading
          university for a fraction of the cost of comparable inpatient
          programs. Learn from the same professors and earn the same diploma as
          full-time students.
        </p>
        <button className="w-[243px] h-[80px] rounded-[5px] bg-white text-[#1E85FE] font-semibold text-[24px] border-[#1E85FE] border-[2px]">
          Read more
        </button>
      </div>
      <div className="w-[441px] h-[449px] flex flex-col content-between my-auto">
        <div className="w-[441px] h-[131px] flex bg-white rounded-[5px] mt-0 mb-auto">
          <div className="w-[71px] h-[70px] mx-[17px] my-auto">
            <Image
              width={500}
              height={500}
              src="/assets/images/iconCareer.png"
              alt=""
              className="w-[71px] h-[70px]"
            />
          </div>
          <div className="ml-[12px] my-auto">
            <p className="text-[24px] font-light">Power</p>
            <p className="text-[24px] font-medium">
              Global Master of Public Health
            </p>
          </div>
        </div>
        <div className="w-[441px] h-[131px] flex bg-white rounded-[5px] my-auto">
          <div className="w-[71px] h-[70px] mx-[17px] my-auto">
            <Image
              width={500}
              height={500}
              src="/assets/images/iconCareer.png"
              alt=""
              className="w-[71px] h-[70px]"
            />
          </div>
          <div className="ml-[12px] my-auto">
            <p className="text-[24px] font-light">Power</p>
            <p className="text-[24px] font-medium">
              Global Master of Public Health
            </p>
          </div>
        </div>
        <div className="w-[441px] h-[131px] flex bg-white rounded-[5px] mt-auto mb-0">
          <div className="w-[71px] h-[70px] mx-[17px] my-auto">
            <Image
              width={500}
              height={500}
              src="/assets/images/iconCareer.png"
              alt=""
              className="w-[71px] h-[70px]"
            />
          </div>
          <div className="ml-[12px] my-auto">
            <p className="text-[24px] font-light">Power</p>
            <p className="text-[24px] font-medium">
              Global Master of Public Health
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
