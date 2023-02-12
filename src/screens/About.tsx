import profilPhoto from "../assets/images/profil-photo.jpg";
import Section from "../components/Section/Section";
const About = () => {
  return (
    <div className="flex justify-center h-screen">
      <Section id="about" className="pt-6">
        <div className="flex flex-col px-4 md:px-0 h-full">
          <h1 className="text-center text-4xl my-10">About Me</h1>
          <div className="flex flex-col md:flex-row flex-1">
            <div className="flex-1 flex justify-center items-center mb-4">
              <div
                style={{ border: "5px solid #0369a1" }}
                className="w-1/2 rounded-t-full overflow-hidden"
              >
                <img alt="" src={profilPhoto} />
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center ">
              <div className="flex w-full justify-center md:justify-center mb-4">
                <div className="bg-primary p-2 md:p-4 mx-2 flex flex-col items-center border-2 border-gray-500 rounded-md">
                  <div className="font-semibold">Experience</div>
                  <div className="text-xs text-gray-200">4 + years</div>
                </div>
                <div className=" bg-primary p-2 md:p-4 mx-2 flex flex-col items-center border-2 border-gray-500 rounded-md">
                  <div className="font-semibold">Completed</div>
                  <div className="text-xs text-gray-200">14 + Projects</div>
                </div>
              </div>
              {
                <>
                  <p className="mb-4">
                    Full stack developer, I create web applications and websites
                    with over 4+ years of experience. Working on browser based
                    games. Always trying to give my best to projects. Delivering
                    quality work.
                  </p>
                  <p></p>
                </>
              }
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;

{
  /* <p className="">What I have done while i was working?</p>
              <p className="pl-2">● Worked on developing e-commerce website</p>

              <p className="pl-2">
                ● Worked on a dashboard for managing tournament events, where
                you can customize the landing page, image and styles. Built in
                React
              </p>
              <p className="pl-2">
                ● Build a website with React and implemented game algorithms for
                board games, used css for animations and used Redux for state
                management
              </p>
              <p className="pl-2">
                ● Developed a game server by using socket.io for multiplayer
                aspect of board games, with additional features like
                spectate/chat
              </p>
              <p className="pl-2">
                ● Load testing the game server using socket.io technology ●
                Formed framework of slack bot which has the abilities of
                commands/shortcuts/related views
              </p>
              <p className="pl-2">
                ● Worked on slack and mirosoft teams bot for commands and
                notifications
              </p>
              <p className="pl-2">● OAuth with Slack</p>
              <p className="pl-2">
                ● Worked on an automated testing project for chess using
                cypress.js
              </p>
              <p className="pl-2 mb-2">
                ● Worked on photon-engine's JavaScript SDK
              </p> */
}
