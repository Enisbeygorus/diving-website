import Section from "../Section/Section";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Services = () => {
  const servicesData = [
    { title: "Sualtı kaynak hizmetleri" },
    { title: "Gemi yat tekne kurtarma" },
    { title: "Baraj ve hes" },
    { title: "Kıyı yapıları" },
    { title: "Sualtı tarama/temizlik" },
    { title: "İskele imalat bakım onarım" },
    { title: "Marina liman yygulamaları" },
    { title: "Boru hattı döşeme onarım" },
    { title: "Liman işaret şamandıraları" },
    { title: "Dalgakıranlar" },
    { title: "Yüzer iskeleler" },
    { title: "Kaldırma paraşütleri" },
  ];

  const iconSize = 30;
  const servicesContent = servicesData.map((obj) => {
    return (
      <div
        // style={{ backgroundColor: "#01b8f4" }}
        className="w-full md:w-1/2 lg:w-1/3 flex items-center text-white text-left sm:px-1 lg:px-1 mb-2"
      >
        <div
          className="flex w-full p-2 py-4"
          style={{ backgroundColor: "#01b8f4" }}
        >
          <IoCheckmarkCircleOutline size={iconSize} />
          <h3 className="ml-2 text-xl font-semibold">{obj.title}</h3>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="py-20 px-4 flex justify-center relative ">
        {/* <div
          style={{
            border: "100px solid #f4f8fb",
            width: "800px",
            height: "800px",
          }}
          className="circle absolute top-0 left-10 w-3/5 z-10 aspect-square  rounded-full"
        ></div> */}
        <Section id="hizmetlerimiz" className="z-20">
          <div className="text-gray-700">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-14">
              Hizmetlerimiz
            </h2>
            <div className="flex flex-wrap">{servicesContent} </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Services;
