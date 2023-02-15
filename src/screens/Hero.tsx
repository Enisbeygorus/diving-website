import hero1 from "../assets/images/hero2.jpg";
import Section from "../components/Section/Section";
import { ButtonPrimary, ButtonSecondary } from "../components/Buttons/Buttons";

const WaveSvg = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full">
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 170"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="#fff"
          d="M0,51L80,65.2C160,79,320,108,480,119C640,130,800,125,960,107.7C1120,91,1280,62,1440,68C1600,74,1760,113,1920,116.2C2080,119,2240,85,2400,82.2C2560,79,2720,108,2880,99.2C3040,91,3200,45,3360,25.5C3520,6,3680,11,3840,19.8C4000,28,4160,40,4320,45.3C4480,51,4640,51,4800,53.8C4960,57,5120,62,5280,70.8C5440,79,5600,91,5760,85C5920,79,6080,57,6240,39.7C6400,23,6560,11,6720,31.2C6880,51,7040,102,7200,124.7C7360,147,7520,142,7680,136C7840,130,8000,125,8160,104.8C8320,85,8480,51,8640,45.3C8800,40,8960,62,9120,62.3C9280,62,9440,40,9600,31.2C9760,23,9920,28,10080,28.3C10240,28,10400,23,10560,31.2C10720,40,10880,62,11040,76.5C11200,91,11360,96,11440,99.2L11520,102L11520,170L11440,170C11360,170,11200,170,11040,170C10880,170,10720,170,10560,170C10400,170,10240,170,10080,170C9920,170,9760,170,9600,170C9440,170,9280,170,9120,170C8960,170,8800,170,8640,170C8480,170,8320,170,8160,170C8000,170,7840,170,7680,170C7520,170,7360,170,7200,170C7040,170,6880,170,6720,170C6560,170,6400,170,6240,170C6080,170,5920,170,5760,170C5600,170,5440,170,5280,170C5120,170,4960,170,4800,170C4640,170,4480,170,4320,170C4160,170,4000,170,3840,170C3680,170,3520,170,3360,170C3200,170,3040,170,2880,170C2720,170,2560,170,2400,170C2240,170,2080,170,1920,170C1760,170,1600,170,1440,170C1280,170,1120,170,960,170C800,170,640,170,480,170C320,170,160,170,80,170L0,170Z"
        ></path>
      </svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          //   fill="#0099ff"
          fill="#fff"
          fillOpacity="1"
          d="M0,96L40,96C80,96,160,96,240,90.7C320,85,400,75,480,64C560,53,640,43,720,58.7C800,75,880,117,960,165.3C1040,213,1120,267,1200,266.7C1280,267,1360,213,1400,186.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center px-4 bg-cover bg-no-repeat"
      style={{
        height: "90vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero1})`,
        // backgroundSize: "100% auto",
      }}
    >
      <Section id="anasayfa" className="h-full">
        <div className="h-full w-full text-left flex flex-col justify-center -mt-20 sm:ml-10 lg:ml-0">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            BODRUM
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Sualtı <span className="text-blue-300">Hizmetleri</span>
          </h1>
          <p className="max-w-2xl mb-6 font-semibold text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Profesyonel ekibimiz ile her zaman ve her yerde yanınızdayız
          </p>
          <div className="flex">
            <ButtonPrimary className="flex justify-center items-center ">
              İletişim
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </ButtonPrimary>
            <ButtonSecondary className="flex justify-center items-center ">
              Detaylı Bilgi
            </ButtonSecondary>
          </div>
        </div>
      </Section>
      <WaveSvg />
    </div>
  );
};

export default Hero;
