import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[364px] bg-[#F5F5F5] mx-auto border-[1px] columns-4 gap-[90px] px-[150px] py-[45px]">
      <ul className="w-[186px] h-[172]">
        <li className="text-black font-[600] text-[24px]">LearnIt</li>
        <li>About the project</li>
        <li>What do we ofer</li>
        <li>Career</li>
      </ul>
      <ul className="w-[186px] h-[172]">
        <li className="text-black font-[600] text-[24px]">Community</li>
        <li>Pupils</li>
        <li>Partners</li>
        <li>Blog</li>
      </ul>
      <ul className="w-[186px] h-[172]">
        <li className="text-black font-[600] text-[24px]">Yet</li>
        <li>Press</li>
        <li>Investors</li>
        <li>Confidenciality</li>
      </ul>
      <div className=" ">
        <Image
          width={500}
          height={500}
          src="/assets/images/image8.png"
          alt="text alt"
        />
        <Image
          width={500}
          height={500}
          src="/assets/images/image9.png"
          alt="text alt"
        />
      </div>
    </div>
  );
};

export default Footer;
