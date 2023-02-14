import Section from "../Section/Section";
import {
  IoShieldCheckmarkOutline,
  IoSpeedometerOutline,
  IoPersonAddOutline,
} from "react-icons/io5";

const iconSize = 80;
const whyData = [
  {
    title: "Güvenlik",
    text: "Yaptığımız işlerde güvenliği çok önemsiyor ve üst düzeyde tutuyoruz.",
    icon: <IoShieldCheckmarkOutline size={iconSize} />,
    wrapperBgColor: "#01b8f4",
  },
  {
    title: "Hız",
    text: "İşlerimizi kısa sürede bitirmeye çalışmak için özenle çalışıyoruz",
    icon: <IoSpeedometerOutline size={iconSize} />,
    wrapperBgColor: "#0e71ce",
  },
  {
    title: "Memnuniyet",
    text: "Müşterilerimizin memnuniyeti bizim için ön planda olduğu için onlardan gelen geri dönüşleri dikkatle dinliyoruz",
    icon: <IoPersonAddOutline size={iconSize} />,
    wrapperBgColor: "#1a1e33",
  },
];
const WhySection = () => {
  const whyDataContent = whyData.map((obj) => {
    return (
      <div
        style={{ backgroundColor: obj.wrapperBgColor }}
        className="p-10 flex flex-col items-center w-full lg:w-1/3"
      >
        <div>{obj.icon}</div>
        <h3 className="text-2xl font-bold">{obj.title}</h3>
        <p className="text-lg">{obj.text} </p>
      </div>
    );
  });
  return (
    <div>
      <div className="py-20 flex justify-center relative ">
        <Section id="why">
          <div>
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-14 px-4">
              Neden Bodrum Sualtı Hizmetleri?
            </h2>
            <div className="flex flex-col lg:flex-row text-center">
              {whyDataContent}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default WhySection;
