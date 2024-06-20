import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { useState, useEffect } from "react";
import { designations } from "./constant";
import { socialMedia } from "./constant";
import Projects from "./components/Projects";
import Card from "./components/Card";
// import resumeLink  from "./constant";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="min-h-screen bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 ">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-3xl font-burtons dark:text-gray-200">Portfolio</h1>
          <ul className="flex items-center gap-3">
            <li
              className="dark:text-white"
              onClick={() => setDarkMode(!darkMode)}
            >
              {" "}
              {darkMode ? (
                <LuSun className="cursor-pointer text-2xl" />
              ) : (
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              )}
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center ">
          <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-600 font-medium md:text-6xl ">
            Sudhanshu Tripathi
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl ">
            Frontend Developer
          </h3>

          <p className="text-md py-5 leading-8 dark:text-gray-200 text-gray-800  max-w-xl mx-auto md:text-xl">
            Experienced Frontend Developer adept in JavaScript, React 
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-400">
          {socialMedia.map((item) => {
            const Icons = item.icon;
            return (
              <a
                href={item.link}
                key={item.name}
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons />
              </a>
            );
          })}
        </div>

        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:h-80 md:w-80">
          <img src="/dev-ed-wave.png" alt="" className="object-cover" />
        </div>

        <div className="lf:flex gap-10 ">3
        <h3 className="text-3xl py-1 text-gray-800 dark:text-gray-200 ">
            Technologies
          </h3>

          <div className="lg:flex lg:justify-around gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl w-64 dark:bg-gray-300 my-10 ">
              <img
                src="/design.png"
                alt=""
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2"> Frontend</h3>

              <div className="flex flex-wrap flex-col ">
                <p>
                  {" "}
                  <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
                </p>
                <p>
                  {" "}
                  <span>BootStrap</span> <span>Tailwind</span>{" "}
                  <span>React</span>
                </p>
                <p>
                  {" "}
                  <span>Redux</span> <span>NextJS</span> <span>TypeScript</span>
                </p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-64   dark:bg-gray-300">
              <img
                src="/code.png"
                alt=""
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2"> Backend</h3>
              <div className="flex flex-wrap flex-col ">
                <p>
                  {" "}
                  <span>NodeJS</span> <span>Express</span>{" "}
                  <span>JavaScript</span>
                </p>
                <p>
                  {" "}
                   <span>REST</span> <span>WebSocket</span>
                </p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-64  dark:bg-gray-300 ">
              <img
                src="/consulting.png"
                alt=""
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2"> Database</h3>
              <div className="flex flex-wrap flex-col ">
                <p>
                  {" "}
                  <span>MongoDB</span> <span>Mysql</span>
                </p>
                <p>
                  {" "}
                  <span>SQL</span> <span>Mongoose</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h3 className="text-3xl py-1 text-gray-800 dark:text-gray-200 ">
            Projects
          </h3>

          {/* <Projects imgUrl={} liveLink={} gitHubLink={}/> */}
          <Card />
        </section>
      </section>
    </main>
  );
};
export default App;
