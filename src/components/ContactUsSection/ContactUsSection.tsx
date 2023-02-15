import { ButtonPrimary } from "../Buttons/Buttons";
import Section from "../Section/Section";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

const Wave2Svg = () => {
  return (
    <div className="absolute left-0 top-0 w-full rotate-180">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#93c5fd"
          fillOpacity="0.1"
          d="M0,64L80,58.7C160,53,320,43,480,74.7C640,107,800,181,960,208C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
const Wave3Svg = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#93c5fd"
          fillOpacity="0.1"
          d="M0,64L80,58.7C160,53,320,43,480,74.7C640,107,800,181,960,208C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

const ContactUsSection = () => {
  return (
    <div className="flex justify-center relative">
      <Wave2Svg />
      <Wave3Svg />
      <Section id="iletişim" className="dark:bg-gray-900 z-20">
        <div className="flex flex-col md:flex-row text-gray-700 px-4">
          <div className="py-8 lg:py-16 ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-600 dark:text-white">
              İletişim
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Formu doldurun ve nasıl yardımcı olabileceğimizi bize bildirin.
              Sizinle en kısa sürede iletişime geçeceğiz.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  E-posta adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-2 outline-none border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="E-posta adresi"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border-2 outline-none border-gray-300 shadow-sm focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Mesajın konusu"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg shadow-sm border-2 outline-none border-gray-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Mesajınız..."
                ></textarea>
              </div>
              <ButtonPrimary
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Gönder
              </ButtonPrimary>
            </form>
          </div>
          <div className="mb-8 space-y-8 flex flex-col justify-center md:pl-8">
            <div className="flex">
              <div>
                <IoLocationOutline size={30} color="#1d4ed8" />
              </div>
              <p className="pl-4">
                Cumhuriyet Mahallesi Mustafa Bey Caddesi Kale Konutları A Blok
                No:1/86 Bodrum/Muğla/ TÜRKİYE Kubilay KARATAŞ
              </p>
            </div>
            <div className="flex">
              <div>
                <IoCallOutline size={30} color="#1d4ed8" />
              </div>
              <p className="pl-4">0555 555 55 55</p>
            </div>
            <div className="flex">
              <div>
                <IoMailOutline size={30} color="#1d4ed8" />
              </div>
              <p className="pl-4">test@test.com</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactUsSection;
