import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [hasCopied1, setHasCopied1] = useState(false);
  const [hasCopied2, setHasCopied2] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pranav.agarwal428@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const handleCopy1 = () => {
    navigator.clipboard.writeText('https://github.com/praanaavvv');
    setHasCopied1(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const handleCopy2 = () => {
    navigator.clipboard.writeText('https://www.linkedin.com/in/pranav-agarwal-502461274/');
    setHasCopied2(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/pranavemoji.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Pranav</p>
              <p className="grid-subtext">
              I'm a Solidity smart contract developer with a strong foundation in backend development, dedicated to building secure and efficient blockchain solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/techstack.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              specialize in a variety of languages, frameworks, and tools, including Solidity, TypeScript, Node.js, Python, Java and subgraph development, allowing me to build robust and scalable blockchain and backend applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Chennai, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Web3</p>
              <p className="grid-subtext">
              "I’m passionate about solving problems and creating impactful solutions through code. Programming isn’t just my profession—it’s my calling. I enjoy staying up-to-date with the latest trends in Web3, tracking crypto charts, exploring new technologies, and continuously expanding my skills."
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="logos-container flex justify-center gap-4">
                {/* Logo 1 - GitHub */}
                <a href="https://github.com/praanaavvv" target="_blank" rel="noopener noreferrer">
                  <img
                    src="assets/github.png"
                    alt="GitHub"
                    className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                  />
                </a>

                {/* Logo 2 - LinkedIn */}
                <a href="https://www.linkedin.com/in/pranav-agarwal-502461274/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="assets/linkedin.png"
                    alt="LinkedIn"
                    className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                  />
                </a>

                {/* Logo 3 - Email */}
                <a href="mailto:pranav.agarwal428@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="assets/icons8-gmail-144.png"
                    alt="Email"
                    className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                  />
                </a>

                {/* Logo 4 - Website */}
                <a href="https://t.me/Pranav21" target="_blank" rel="noopener noreferrer">
                  <img
                    src="assets/tg.png"
                    alt="Website"
                    className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                  />
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;