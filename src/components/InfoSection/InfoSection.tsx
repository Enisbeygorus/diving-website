import Section from "../Section/Section";
import hero2 from "../../assets/images/hero2.jpg";

import { IoWaterOutline } from "react-icons/io5";

const iconSize = 80;

const infoData = [
  {
    title: "Sualtı kaynak hizmetleri",
    text: "Uzman ve tecrübeli ekibimiz ile sualtı kaynak ve kesim hizmetleri",
    icon: <IoWaterOutline size={iconSize} />,
  },
  {
    title: "Gemi yat tekne kurtarma",
    text: "Bugüne kadar yüzlerce batık, hasarlı tekneyi itinayla kurtardık",
    icon: <IoWaterOutline size={iconSize} />,
  },
  {
    title: "Sualtı kaynak hizmetleri",
    text: "Uzman ve tecrübeli ekibimiz ile sualtı kaynak ve kesim hizmetleri",
    icon: <IoWaterOutline size={iconSize} />,
  },
  {
    title: "Gemi yat tekne kurtarma",
    text: "Bugüne kadar yüzlerce batık, hasarlı tekneyi itinayla kurtardık",
    icon: <IoWaterOutline size={iconSize} />,
  },
];

const InfoSection = () => {
  const infoContent = infoData.map((obj, index) => {
    return (
      <li key={index} className="flex flex-col lg:flex-row mb-8">
        <div className="flex justify-center items-center">{obj.icon}</div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold">{obj.title}</h3>
          <p className="text-lg">{obj.text} </p>
        </div>
      </li>
    );
  });

  return (
    <div className="lg:h-screen py-20 flex justify-center relative">
      <Section id="info">
        <>
          <div
            style={{
              border: "100px solid #f4f8fb",
              width: "800px",
              height: "800px",
            }}
            className="circle absolute top-0 right-10 w-3/5 z-10 aspect-square  rounded-full"
          ></div>
          <div className="relative px-4 flex items-start lg:items-center h-full w-full text-gray-700 z-20">
            <div className="w-full lg:w-1/2 text-left">
              <div className="w-full text-center lg:text-left">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-14">
                  Sualtında başarı için burdayız!
                </h1>
                <ul>{infoContent}</ul>
              </div>
            </div>
            <div className="w-1/2 hidden lg:block p-5">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero2})`,
                }}
                className="w-full relative aspect-square rounded-full border overflow-hidden bg-cover z-20"
              ></div>
            </div>
          </div>
        </>
      </Section>
    </div>
  );
};

export default InfoSection;
