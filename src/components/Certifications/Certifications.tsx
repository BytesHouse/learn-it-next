import Image from "next/image";

const Certifications = () => {
  return (
    <div className="w-[1200px] h-[791px] bg-white mx-auto border-[2px] flex justify-center items-center gap-[40px] ">
      <div className="justify-center">
        <h3 className=" text-center text-[#103662] font-[600] text-[26px]">
          Develop your career
        </h3>
        <h2 className=" text-center text-[44px] text-[#212121] font-[600] ">
          Get the skills you need for a job that is in demand
        </h2>
        <p className=" text-center text-[18px] text-[#3D3D3D] font-[400]">
          Explore a new field like information technology or data science. No
          college education or prior training is required.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          width={500}
          height={500}
          className="w-[328px] h-[449px]"
          src="/assets/images/Group17.png"
          alt="Group17"
        />
      </div>
      <div>
        <Image
          width={500}
          height={500}
          className="w-[328px] h-[449px]"
          src="/assets/images/Group17.png"
          alt="Group18"
        />
      </div>
      <div>
        <Image
          width={500}
          height={500}
          className="w-[328px] h-[449px]"
          src="/assets/images/Group17.png"
          alt="Group19"
        />
      </div>
    </div>
  );
};

export default Certifications;
