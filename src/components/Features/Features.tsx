import Graduated1 from "../icons/Graduated1";
import Presentation1 from "../icons/Presentation1";
import Management1 from "../icons/Management1";

const Features = () => {
  return (
    <div className="w-[1440px] h-[877px] mx-auto justify-center pt-[150px]">
      <div className="flex flex-col justify-between w-[1200px] h-[490px] mx-auto">
        <h2 className="text-[44px] font-semibold text-center">
          Reach Your Goals With Coursera
        </h2>
        <div className="w-[654px] mx-auto">
          <p className="text-[18px] font-regular text-center">
            Build your skills through online courses, certifications and degree
            programs from the world&apos;s top universities and companies.
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col justify-between w-[325px] h-[293px] hover:bg-[#1E85FE] p-[10px] cursor-pointer">
            <div className="w-[102px] h-[100px] bg-[#1E85FE] rounded-[5px] mx-auto flex justify-center items-center">
              <Presentation1 />
            </div>
            <h3 className="text-[22px] font-semibold text-center">
              Get relevant skills
            </h3>
            <div className="h-[113px] w-full">
              <p className="text-[20px] font-regular text-center">
                such as business intelligence, graphic design, Python, etc.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[325px] h-[293px] hover:bg-[#1E85FE] p-[10px] cursor-pointer">
            <div className="w-[102px] h-[100px] bg-[#1E85FE] rounded-[5px] mx-auto flex justify-center items-center">
              <Graduated1 />
            </div>
            <h3 className="text-[22px] font-semibold text-center">
              Get your diploma
            </h3>
            <div className="h-[113px] w-full">
              <p className="text-[20px] font-regular text-center">
                from a leading university in business, computer science and
                other specialties
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[325px] h-[293px] hover:bg-[#1E85FE] p-[10px] cursor-pointer">
            <div className="w-[102px] h-[100px] bg-[#1E85FE] rounded-[5px] mx-auto flex justify-center items-center">
              <Management1 />
            </div>
            <h3 className="text-[22px] font-semibold text-center">
              Grow your organization
            </h3>
            <div className="h-[113px] w-full">
              <p className="text-[20px] font-regular text-center">
                with the help of demanded training programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
