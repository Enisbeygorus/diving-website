import profilPhoto from "../assets/images/profil-photo.jpg";
import { AllIcons } from "../assets/Icons";
import Button from "../components/Buttons/Button";
import { Link } from "react-router-dom";
import Section from "../components/Section/Section";
const {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TypeScriptIcon,
  NodejsIcon,
  SocketIcon,
  MongoIcon,
  JestIcon,
  ReactIcon,
  SassIcon,
  GitIcon,
  WepbackIcon,
} = AllIcons;

const Home = () => {
  return (
    <div className="flex justify-center h-screen ">
      <Section id="home">
        <div className="flex flex-col justify-center items-center md:flex-row w-full h-full px-4 md:px-0 md:items-center md:-mt-14">
          <div className="md:flex-1 md:order-1 flex justify-end my-10 md:my-0">
            <div
              style={{ border: "5px solid #0369a1" }}
              className="aspect-square w-40 md:w-3/5 relative rounded-full overflow-hidden"
            >
              <div className="absolute bottom-0 left-0">
                <img alt="" src={profilPhoto} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className=" text-white  font-bold text-3xl  md:text-5xl mb-4">
              Enis Sadık Beygörüş
            </h1>
            <h2 className="uppercase font-bold text-white text-base mb-4">
              Full Stack Web Developer
            </h2>
            <div className="font-medium text-white mb-10">
              I'm a web developer who loves to build web applications.
            </div>
            <div className="flex justify-center md:justify-start">
              <Link className="w-full md:w-40" to={"/contact"}>
                <Button>Contact</Button>
              </Link>
              {/* <Link to={"/projects"} style={{ margin: "0 10px" }}>
                <Button>Projects</Button>
              </Link> */}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;

{
  /* <div className="flex justify-center mb-4">
          <div className="flex justify-center max-w-xl p-2 md:p-4 flex-wrap bg-primaryLightBg1 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <ReactIcon className="w-1/4 my-2" width={40} height={40} />
            <HtmlIcon className="w-1/4 my-2" width={40} height={40} />
            <CssIcon className="w-1/4 my-2" width={40} height={40} />
            <JsIcon className="w-1/4 my-2" width={40} height={40} />
            <TypeScriptIcon className="w-1/4 my-2" width={40} height={40} />
            <NodejsIcon className="w-1/4 my-2" width={40} height={40} />
            <SocketIcon className="w-1/4 my-2" width={40} height={40} />
            <MongoIcon className="w-1/4 my-2" width={40} height={40} />
            <SassIcon className="w-1/4 my-2" width={40} height={40} />
            <GitIcon className="w-1/4 my-2" width={40} height={40} />
            <JestIcon className="w-1/4 my-2" width={40} height={40} />
            <WepbackIcon className="w-1/4 my-2" width={40} height={40} />
          </div>
        </div> */
}
