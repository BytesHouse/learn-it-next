import React from "react";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import Line from "../icons/Line";
import Image from "next/image";

const Feedback = () => {
  const mock = [
    {
      id: 1,
      position: "web developer",
      author: "Julio R.",
      authorImage: "/assets/images/image4.png",
      location: "Chili",
      message:
        "With LearnIt I was able to study online and ended up with enough knowledge and skills to find a new, well-paying job. '",
      date: "03.05.2024",
    },
    {
      id: 2,
      position: "Giza at the University of Illinois",
      author: "Kara A.",
      authorImage: "/assets/images/image5.png",
      location: "United States",
      message:
        "With LearnIt I was able to study online and ended up with enough knowledge and skills to find a new, well-paying job. '",
      date: "03.05.2024",
    },
    {
      id: 3,
      position: "IBM Professional Certification ",
      author: "Kara A.",
      authorImage: "/assets/images/image6.png",
      location: "Romania",
      message:
        "'The recruiter noticed a professional certification on my LinkedIn profile. In the interview, they said that the skills I have gained are impressive. The recruiter noticed a professional certification on my LinkedIn profile. In the interview, they said that the skills I have gained are impressive. ",
      date: "03.05.2024",
    },
  ];

  return (
    <div className="w-[1440px] mx-auto justify-center py-[100px] flex">
      <div className="w-[1200px] h-[800px] mx-auto">
        <div className="w-[1200px] h-[120px] mx-auto">
          <h2 className="text-[44px] font-semibold text-center">
            From LearnIt Community
          </h2>
          <p className="text-[18x] font-regular text-center">
            Over 77 million people are already studying on Coursera
          </p>
        </div>
        <div className="flex justify-between mt-[96px] w-[1200px] gap-[30px]">
          <div className="flex w-[30px] h-[50px] my-auto justify-center">
            <LeftArrow />
          </div>
          {mock.map((item) => (
            <div
              key={item.id}
              className="w-[325px] h-[584px] flex flex-col justify-between px-4"
            >
              <div>
                <Image
                  width={500}
                  height={500}
                  src={item.authorImage}
                  alt={item.author}
                  className="w-[202px] h-[202px] mx-auto"
                />
              </div>
              <div className="w-full h-[54px] mx-auto">
                <p className="text-[32px] text-[#103662] font-semibold text-center truncate">
                  {item.author}
                </p>
              </div>
              <div className="w-full h-[66px] mx-auto">
                <p className="text-[24px] text-black font-semibold text-center text-ellipsis overflow-hidden">
                  {item.position}
                </p>
              </div>
              <div className="w-full h-[32px] mx-auto">
                <p className="text-[20px] text-black font-regular text-center truncate">
                  {item.location}
                </p>
              </div>
              <div className="flex w-[100px] mx-auto">
                <Line />
              </div>
              <div className="w-full h-[160px] mx-auto text-ellipsis overflow-hidden">
                <p className="text-[20px] text-black font-regular text-center">
                  {item.message}
                </p>
              </div>
            </div>
          ))}
          <div className="flex w-[30px] h-[50px] my-auto justify-center">
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
