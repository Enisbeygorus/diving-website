import Section from "../Section/Section";
import hero2 from "../../assets/images/hero2.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { ButtonPrimary } from "../Buttons/Buttons";

const GallerySection = () => {
  const galeryData = [
    { imageUrl: hero2, title: "Deşarj" },
    { imageUrl: hero2, title: "Gemi kurtarma" },
    { imageUrl: hero2, title: "İskele yapım ve onarım" },
    { imageUrl: hero2, title: "Sualtı boru hattı" },
    { imageUrl: hero2, title: "Sualtı boru hattı" },
    {
      imageUrl:
        "http://www.bodrumsualtihizmetleri.com/FileUpload/op971086/Resim/04.jpg",
      title: "Sualtı boru hattı",
    },
  ];

  const galeryContent = galeryData.map((obj) => {
    return (
      <div
        style={{ aspectRatio: "1 / 0.5" }}
        className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4 overflow-hidden"
      >
        <img src={obj.imageUrl} />
        {/* <div className="w-1/2 h-1 my-2 bg-blue-300 rounded-md"></div>
        <h3 className="text-xl font-semibold">{obj.title}</h3> */}
      </div>
    );
  });

  return (
    <div>
      <div className="py-20 px-4 flex justify-center relative text-gray-700">
        <Section id="galery" className="z-20">
          <div>
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-14">
              Galeri
            </h2>
            <div className="flex flex-wrap">{galeryContent}</div>
            <ButtonPrimary className="ml-2">
              <div className="flex items-center underline">
                <span className="mr-2">Daha Fazla</span>{" "}
                <IoArrowForwardOutline size={20} />
              </div>
            </ButtonPrimary>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default GallerySection;
