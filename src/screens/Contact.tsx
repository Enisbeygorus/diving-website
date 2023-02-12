import { AllIcons } from "../assets/Icons";
import Section from "../components/Section/Section";

const { MailIcon, LinkedInIcon } = AllIcons;

interface IComponentsRow {
  content: React.ReactNode;
}

const ComponentsRow = ({ content }: IComponentsRow) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-2/3 mb-4">
      <div className="flex w-full justify-center max-w-xl p-2 md:p-4 flex-wrap bg-primaryLightBg1  border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        {content}
      </div>
    </div>
  );
};

const Contact = () => {
  const contactRow = (
    icon: React.ReactElement,
    content: React.ReactElement
  ) => {
    return (
      <div className="flex mb-2">
        <div className="mr-2">{icon}</div>
        {content}
      </div>
    );
  };

  const contact = (
    <div className="text-gray-500">
      <h1 className=" text-gray-500 uppercase font-bold text-center text-2xl mb-4">
        Enis Sadık Beygörüş
      </h1>
      <h2 className="uppercase font-bold text-center text-gray-500 text-base mb-4">
        Full Stack Web Developer
      </h2>
      {contactRow(
        <MailIcon width={25} height={25} fill="#6b7280" />,
        <div>enisbeygorus1@gmail.com</div>
      )}
      {contactRow(
        <LinkedInIcon width={25} height={25} fill="#6b7280" />,
        <a
          className="underline"
          href="https://www.linkedin.com/in/enis-sad%C4%B1k-beyg%C3%B6r%C3%BC%C5%9F-461820194/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn profile
        </a>
      )}
    </div>
  );

  return (
    <div className="flex justify-center h-screen">
      <Section id="contact" className="pt-6">
        <div className="flex flex-col px-4 md:px-0 h-full">
          <h1 className="text-center text-4xl my-10">Contact</h1>
          <div className="flex flex-col items-center w-full  mb-4">
            <ComponentsRow content={contact} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
