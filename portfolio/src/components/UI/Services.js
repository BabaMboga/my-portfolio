import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiuxImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";
import cssImg from "../../assets/images/project-icons/css-3.png";
import htmlImg from "../../assets/images/project-icons/html-5.png";
import flaskImg from "../../assets/images/project-icons/icons8-flask.svg";
import javascriptImg from "../../assets/images/project-icons/icons8-javascript.svg";
import reactImg from "../../assets/images/project-icons/icons8-react.svg";
import tailwindCssImg from "../../assets/images/project-icons/icons8-tailwindcss.svg";
import javaImg from "../../assets/images/project-icons/java.png";
import jsImg from "../../assets/images/project-icons/js.png";
import pythonImg from "../../assets/images/project-icons/python.png";
import reactImg2 from "../../assets/images/project-icons/react.png";
import sqlImg from "../../assets/images/project-icons/sql-server.png";
import gitImg from "../../assets/images/project-icons/git.svg";
import nextImg from "../../assets/images/project-icons/nextjs.svg";
import reduxImg from "../../assets/images/project-icons/redux.svg";
import typescriptImg from "../../assets/images/project-icons/typescript-icon.svg";
import bootstrapImg from "../../assets/images/project-icons/bootstrap-svgrepo-com.svg";
import vscodeImg from "../../assets/images/project-icons/icons8-visual-studio-100.svg";
import figmaImg from "../../assets/images/project-icons/figma-svgrepo-com.svg";
import vercelImg from "../../assets/images/project-icons/vercel-icon-svgrepo-com.svg";
import netlifyImg from "../../assets/images/project-icons/netlify-svgrepo-com.svg";
import npmImg from "../../assets/images/project-icons/npm-svgrepo-com.svg";
import sqliteImg from "../../assets/images/project-icons/sqlite-svgrepo-com.svg";
import postgresImg from "../../assets/images/project-icons/icons8-postgres.svg";
import postmanImg from "../../assets/images/project-icons/postman-icon-svgrepo-com.svg";
import viteImg from "../../assets/images/project-icons/icons8-vite-96.png";
import windowsImg from "../../assets/images/project-icons/windows-174-svgrepo-com.svg";
import anacondaImg from "../../assets/images/project-icons/anaconda-svgrepo-com.svg";
import azureImg from "../../assets/images/project-icons/azure-vms-svgrepo-com.svg";
import linuxImg from "../../assets/images/project-icons/linux-svgrepo-com.svg";
import blenderImg from "../../assets/images/project-icons/blender-svgrepo-com.svg";
import cloudflareImg from "../../assets/images/project-icons/icons8-cloudflare-96.png";
import expressImg from "../../assets/images/project-icons/icons8-express-js-96.png";
import firebaseImg from "../../assets/images/project-icons/icons8-firebase-144.png";
import kafkaImg from "../../assets/images/project-icons/icons8-apache-kafka-96.png";
import prismaImg from "../../assets/images/project-icons/prisma-svgrepo-com.svg";
import nginxImg from "../../assets/images/project-icons/nginx-logo-svgrepo-com.svg";
import nodejsImg from "../../assets/images/project-icons/nodejs01-svgrepo-com.svg";
import dockerImg from "../../assets/images/project-icons/docker-svgrepo-com.svg";
import pnpmImg from "../../assets/images/project-icons/light-pnpm-svgrepo-com.svg";
import powershellImg from "../../assets/images/project-icons/powershell2-svgrepo-com.svg";
import stackOverFlowImg from "../../assets/images/project-icons/stackoverflow-color-svgrepo-com.svg";
import svgImg from "../../assets/images/project-icons/svg-svgrepo-com.svg";

const Services = () => {
  // Create an array of icon elements
  const slideShowIcons = [
    <img src={cssImg} alt="CSS" />,
    <img src={htmlImg} alt="HTML" />,
    <img src={flaskImg} alt="Flask" />,
    <img src={javascriptImg} alt="JavaScript" />,
    <img src={reactImg} alt="React" />,
    <img src={tailwindCssImg} alt="Tailwind CSS" />,
    <img src={javaImg} alt="Java" />,
    <img src={jsImg} alt="JS" />,
    <img src={pythonImg} alt="Python" />,
    <img src={reactImg2} alt="React" />,
    <img src={sqlImg} alt="SQL" />,
    <img src={gitImg} alt="Git" />,
    <img src={nextImg} alt="Nextjs" />,
    <img src={reduxImg} alt="Redux" />,
    <img src={typescriptImg} alt="Typescript" />,
    <img src={bootstrapImg} alt="bootstrap" />,
    <img src={vscodeImg} alt="visualstudio" />,
    <img src={figmaImg} alt="figma" />,
    <img src={vercelImg} alt="vercel" />,
    <img src={netlifyImg} alt="netlify" />,
    <img src={npmImg} alt="npm" />,
    <img src={sqliteImg} alt="sqlite" />,
    <img src={postgresImg} alt="postgres" />,
    <img src={postmanImg} alt="postgres" />,
    <img src={viteImg} alt="vite" />,
    <img src={windowsImg} alt="windows" />,
    <img src={anacondaImg} alt="anaconda" />,
    <img src={azureImg} alt="azure" />,
    <img src={linuxImg} alt="linux" />,
    <img src={blenderImg} alt="blender" />,
    <img src={cloudflareImg} alt="cloudflare" />,
    <img src={expressImg} alt="express" />,
    <img src={firebaseImg} alt="firebase" />,
    <img src={kafkaImg} alt="kafka" />,
    <img src={prismaImg} alt="prisma" />,
    <img src={nginxImg} alt="nginx" />,
    <img src={nodejsImg} alt="nodejs" />,
    <img src={dockerImg} alt="docker" />,
    <img src={pnpmImg} alt="pnpm" />,
    <img src={powershellImg} alt="powershell" />,
    <img src={stackOverFlowImg} alt="stackOverFlow" />,
    <img src={svgImg} alt="svg" />,
  ];

  // Settings for slider component set
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4 rem] mb-5">
            What do I help?
          </h2>
          <p>
            I help folks turn ideas into working software -- clean, smooth & slightly spiced. Whether it's frontend magic, backend muscle, UI/UX polish or the random tech that pops up in the middle of a project, I've got the toolkit and definitely the stubbornness to make it happen.
          </p>
          <Slider
            {...sliderSettings}
            className=" flex items-center px-20 mt-4 mr-15 pt-5 "
          >
            {slideShowIcons.map((icon, index) => (
              <div key={index} className="icon-slide">
                {icon}
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ================ vertical line running through the middle ================ */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

              {/* ================= left card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-indigo-300 cursor-pointer 
                                        ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl"
                        >
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          On the backend side, I'm basicallt the person making sure your app doesn't faint when real users show up. Databases, server logic, APIs -- all the behind-the-scenes heavy lifting that keeps everything running like a well-fed boda rider. Clean, realiable and stress-free.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* =============== right card =============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-indigo-300 cursor-pointer 
                                        ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl"
                        >
                          UI/UX Design
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          When it comes to UI/UX, I design experiences that don't make users feel like they're solving a riddle. Smooth flows, thoughtful layouts & visuals that actually make sense. From sketches to clickable prototypes, I turn ideas into interfaces that feel natural and not like homework.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={uiuxImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ================= left card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group  hover:bg-indigo-300 cursor-pointer 
                                        ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl"
                        >
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Frontend is where I try to flex - taking designs and turning them into crisp, responsive interfaces that behave themselves on every screen size. If it sparkles, slides, loads fast & makes the user smile a bit if not a lot... chances are I built it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* =============== right card =============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group  hover:bg-indigo-300 cursor-pointer 
                                        ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl"
                        >
                          Agile Methodology
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          I work with an agile mindset - small updates, constant feedback, zero drama. No vanishing for 3 months then returning with a mystery project. Just steady progress, clear communication and building things the client actually wants... never what the developer assumed at 2 a.m.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
