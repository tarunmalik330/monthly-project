import React, { useState } from "react";
import dinoImg from "../assets/images/png/dinoImg.png";
import buildProject from "../assets/images/png/buildProject.png";
import companyImg from "../assets/images/png/company.png";
import koinerImg from "../assets/images/png/koinerImg.png";
import brandnameImg from "../assets/images/png/BrandnameImg.png";
import lemonwaresImg from "../assets/images/png/lemonwaresImg.png";
import marketingGrowth from "../assets/images/png/marketingGrowth.png";
import furnitureImg from "../assets/images/png/furnitureImg.png";
import nftnowImg from "../assets/images/png/NftNowImg.png";
import NexAiImg from "../assets/images/png/NexAi.png";
import ClooppImg from "../assets/images/png/clooppImg.png";
import marcJoachim from "../assets/images/png/marcJoachim.png";
import Importopic from "../assets/images/png/imptopic.png";
import NextTopic from "../assets/images/png/NextjsTopic.png";
import viteImg from "../assets/images/png/viteImg.png";
import projectList from "../assets/images/png/projectList.png";
import nobalmind from "../assets/images/png/nobal-mind.png";
import mappractice from "../assets/images/png/mappractice.png";

const Header = () => {
  const [opentab, setOpentab] = useState(1);
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <div className="container mx-auto xl:max-w-[1164px] xl:px-3 px-6">
          <h1 className="text-center text-6xl font-medium text-lime-600 py-5">
            Monthly Projects
          </h1>
          <ul className="flex items-center justify-center mb-12 gap-[50px] pt-5">
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setOpentab(1);
                }}
                className={`${
                  opentab === 1 ? "text-lime-600" : ""
                } text-[30px] font-normal text-black`}
              >
                January
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setOpentab(2);
                }}
                className={`${
                  opentab === 2 ? "text-lime-600" : ""
                } text-[30px] font-normal text-black`}
              >
                February
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setOpentab(3);
                }}
                className={`${
                  opentab === 3 ? "text-lime-600" : ""
                } text-[30px] font-normal text-black`}
              >
                March
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setOpentab(4);
                }}
                className={`${
                  opentab === 4 ? "text-lime-600" : ""
                } text-[30px] font-normal text-black`}
              >
                April
              </a>
            </li>
          </ul>
          <div className="border-[#1A2E05] border-[3px] rounded-[14px] border-solid p-7">
            <div className={opentab === 1 ? "block" : "hidden"}>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">1.</p>
                  <img
                    src={brandnameImg}
                    alt="brandnameImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/brandname"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/brandname
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://brandname-001.netlify.app/"
                    target="blank"
                  >
                    https://brandname-001.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">2.</p>
                  <img
                    src={buildProject}
                    alt="buildProject"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/buildproject"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/buildproject
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://construction-building001.netlify.app/"
                    target="blank"
                  >
                    https://construction-building001.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">3.</p>
                  <img
                    src={companyImg}
                    alt="companyImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/company"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/company
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://digital-product0001.netlify.app/"
                    target="blank"
                  >
                    https://digital-product0001.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">4.</p>
                  <img
                    src={koinerImg}
                    alt="koinerImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/khushi303/koiner"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/khushi303/koiner
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://koiner-001.web.app/"
                    target="blank"
                  >
                    https://koiner-001.web.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">5.</p>
                  <img
                    src={lemonwaresImg}
                    alt="lemonwaresImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/lemonwares"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/lemonwares
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://lemonwares-001.netlify.app/"
                    target="blank"
                  >
                    https://lemonwares-001.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">6.</p>
                  <img
                    src={marketingGrowth}
                    alt="marketingGrowth"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/marketing-growth"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/marketing-growth
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://marketing-growth.netlify.app/"
                    target="blank"
                  >
                    https://marketing-growth.netlify.app/
                  </a>
                </div>
              </div>
            </div>
            <div className={opentab === 2 ? "block" : "hidden"}>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">1.</p>
                  <img
                    src={dinoImg}
                    alt="dinoImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/dinolfg"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/dinolfg
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://dinolfg-01.netlify.app/"
                    target="blank"
                  >
                    https://dinolfg-01.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">2.</p>
                  <img
                    src={furnitureImg}
                    alt="furnitureImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/Furniture"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/Furniture
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://furniture-01.netlify.app/"
                    target="blank"
                  >
                    https://furniture-01.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">3.</p>
                  <img
                    src={nftnowImg}
                    alt="nftnowImg "
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/netnow"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/netnow
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://netnow.netlify.app/"
                    target="blank"
                  >
                    https://netnow.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">4.</p>
                  <img
                    src={NexAiImg}
                    alt="NexAiImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/nex-ai"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/nex-ai
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://naxai-01.netlify.app/"
                    target="blank"
                  >
                    https://naxai-01.netlify.app/
                  </a>
                </div>
              </div>
            </div>
            <div className={opentab === 3 ? "block" : "hidden"}>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">1.</p>
                  <img
                    src={ClooppImg}
                    alt="ClooppImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/cloopp"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/cloopp
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://cloopp-2tan.vercel.app/"
                    target="blank"
                  >
                    https://cloopp-2tan.vercel.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">2.</p>
                  <img
                    src={marcJoachim}
                    alt="marcJoachim"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/for-test"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/for-test
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://marc-joachim-hubrich01.netlify.app/"
                    target="blank"
                  >
                    https://marc-joachim-hubrich01.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">3.</p>
                  <img
                    src={Importopic}
                    alt="Importopic"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/marchpractice"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/marchpractice
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://marchpractice.vercel.app/"
                    target="blank"
                  >
                    https://marchpractice.vercel.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">4.</p>
                  <img
                    src={NextTopic}
                    alt="NextTopic"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/my-web"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/my-web
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://nextjs-rust-three-74.vercel.app/"
                    target="blank"
                  >
                    https://nextjs-rust-three-74.vercel.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">5.</p>
                  <img
                    src={viteImg}
                    alt="viteImg"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/myviteproject"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/myviteproject
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://vite-project001.netlify.app/"
                    target="blank"
                  >
                    https://vite-project001.netlify.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">6.</p>
                  <img
                    src={projectList}
                    alt="projectList"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/monthly-project"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/monthly-project
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://monthly-project.vercel.app/"
                    target="blank"
                  >
                    https://monthly-project.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            <div className={opentab === 4 ? "block" : "hidden"}>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">1.</p>
                  <img
                    src={nobalmind}
                    alt="nobalmind"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/nobalmind"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/nobalmind
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://nobalmind.vercel.app/"
                    target="blank"
                  >
                    https://nobalmind.vercel.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">2.</p>
                  <img
                    src={mappractice}
                    alt="mappractice"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/map-contant"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/map-contant
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://map-contant.vercel.app/"
                    target="blank"
                  >
                    https://map-contant.vercel.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-[48px]">
                <div className="w-[35%] flex item-start gap-[40px]">
                  <p className="text-center text-3xl font-medium">3.</p>
                  <img
                    src={Importopic}
                    alt="Importopic"
                    className="w-full rounded-[14px]"
                  />
                </div>
                <div className="w-[55%]">
                  <div className="pb-4">
                    <p className="text-lime-950 text-3xl font-medium pb-2">
                      GitHub Link :
                    </p>
                    <a
                      href="https://github.com/tarunmalik330/marchpractice"
                      target="blank"
                      className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    >
                      https://github.com/tarunmalik330/marchpractice
                    </a>
                  </div>
                  <p className="text-lime-950 text-3xl font-medium pb-2">
                    Live Link:
                  </p>
                  <a
                    className="text-[20px] font-normal text-lime-950 hover:text-lime-600 transition-all ease-linear duration-500"
                    href="https://marchpractice.vercel.app/"
                    target="blank"
                  >
                    https://marchpractice.vercel.app/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
