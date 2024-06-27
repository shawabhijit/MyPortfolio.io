import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { brainwaveServices } from "../constants";
import {
  Gradient,
} from "../design/Services";
import { GsapIconImage, reactIconImage, tailwindCssicon, JavascriptIconimage, HTMLIconImage, ThreejsIconimage, CssIconImage } from "../assets";
import { FiArrowUpRight } from "react-icons/fi";



const Projects = () => {
  const recent = <span>recent projects</span>
  return (
    <div>
      <Section id="how-to-use">
        <div className="container">
          <Heading
            title={`A small selection of `}
            text="Projects Reflecting My Skills and Passion for Frontend Development"
          />

          <div className="relative">
            <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                <img
                  className="w-full h-full object-cover md:object-right"
                  width={800}
                  alt="e-commerce site"
                  height={730}
                  src=""
                />
              </div>

              <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="h4 mb-4">Ecommerce Site</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  A Comprehensive E-commerce Site with Advanced Search, Cart Management, and Secure Payment Integration
                </p>
                <ul className="body-2">
                  {brainwaveServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* techstacks */}
              <div>
                <div className={`absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2    lg-right-auto lg:bottom-8 lg:-translate-x-1/2 flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]  text-base font-code flex-wrap justify-between`}>
                  <div className="flex">
                    <img src={reactIconImage} alt="loading"
                      className="w-5 h-5 mr-4 "
                    />
                    <img src={JavascriptIconimage} alt="loading"
                      className="w-5 h-5 mr-4 "
                    />
                    <img src={tailwindCssicon} alt="loading"
                      className="w-5 h-5 mr-4 "
                    />
                  </div>
                  <div className="flex text-color-1 items-center gap-2 cursor-pointer">
                    <a href="##">Check Live Site</a>
                    <FiArrowUpRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
              <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src=""
                    className="h-full w-full object-cover"
                    width={630}
                    height={750}
                    alt="AI Resume Builder"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">AI Resume Builder</h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Elevate Your Career
                    Harness AI for Personalized Resumes
                    Custom Themes, AI Guidance, and Seamless Downloads .
                  </p>
                </div>
                {/* techstacks */}
                <div>
                  <div className={`w-[80%] absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]  text-base font-code flex-wrap justify-between`}>
                    <div className="flex">
                      <img src={reactIconImage} alt="loading"
                        className="w-5 h-5 mr-4 "
                      />
                      <img src={JavascriptIconimage} alt="loading"
                        className="w-5 h-5 mr-4 "
                      />
                      <img src={tailwindCssicon} alt="loading"
                        className="w-5 h-5 mr-4 "
                      />
                    </div>
                    <div className="flex text-color-1 items-center gap-2 cursor-pointer">
                      <a href="##">Check Live Site</a>
                      <FiArrowUpRight />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Chat Application</h4>
                  <p className="body-2 mb-[2rem] text-n-3">
                    Real-time Chat & Media Sharing
                    Stay Connected Anywhere: Secure Messaging & Group Chats
                    Effortless Communication: Multimedia Sharing & Privacy Controls
                  </p>
                </div>

                <div>
                  <div className={`w-[90%] absolute left-4 right-4 top-[40%] md:top-[30%] border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]  text-base font-code flex-wrap justify-between`}>
                    <div className="flex">
                      <img src={reactIconImage} alt="loading"
                        className="w-5 h-5 mr-4 "
                      />
                      <img src={JavascriptIconimage} alt="loading"
                        className="w-5 h-5 mr-4 "
                      />
                      <img src={tailwindCssicon} alt="loading"
                        className="w-5 h-5 mr-4 "
                      />
                    </div>
                    <div className="flex text-color-1 items-center gap-2 cursor-pointer">
                      <a href="##">Check Live Site</a>
                      <FiArrowUpRight />
                    </div>
                  </div>
                </div>

                <div className="relative md:top-8 h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                  <img
                    src=""
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt="Chat Application"
                  />
                </div>
              </div>
            </div>

            <Gradient />
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Projects
