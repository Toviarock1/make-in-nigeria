"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { fadeIn } from "@/motion";
import Card from "@/components/Card";
import ceo from "@/public/ceo.svg";

import speaker1 from "@/public/speaker1.svg";
import speaker2 from "@/public/speaker2.svg";
import speaker3 from "@/public/speaker3.svg";
import speaker4 from "@/public/speaker4.svg";
import speaker5 from "@/public/speaker5.svg";
import partner1 from "@/public/partner1.svg";
import partner2 from "@/public/partner2.svg";
import partner3 from "@/public/partner3.svg";
import partner4 from "@/public/partner4.svg";
import partner5 from "@/public/partner5.svg";
import partner6 from "@/public/partner6.svg";
import partner7 from "@/public/partner7.svg";
import partner8 from "@/public/partner8.svg";
import email from "@/public/email.svg";
import gps from "@/public/gps2.svg";
import twitter from "@/public/twitter2.svg";
import facebook from "@/public/facebook2.svg";
import linkedin from "@/public/linkedin.svg";
import instagram from "@/public/instagram.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SpeakerCard from "@/components/SpeakerCard";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";

const Home = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [nav, setNav] = useState(false);
  const control = useAnimation();
  const [ref, inView] = useInView();

  const heroVariant = {
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
    },
    hidden: {
      scale: 0,
      opacity: 0,
      y: 100,
    },
  };

  const welcomeImgVariant = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -50,
      opacity: 0,
    },
  };

  const aboutTextVariant = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -50,
      opacity: 0,
    },
  };

  const welcomeTextVariant = {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
    },
    hidden: {
      y: 4,
      x: 100,
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <>
      <header className="bg-white px-9 md:px-32 text-black">
        <nav className="flex justify-between items-center w-full">
          <div>
            <Image alt="icon" src={logo} width={83} height={84} />
          </div>
          <div className={`${nav ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row gap-8 absolute md:static bg-white mt-9 md:mt-0 z-10 w-full right-0 left-0 px-9 py-10 md:py-0 md:px-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Institute</a>
              </li>
              <li>
                <a href="#">Our Gallery</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="px-4 bg-[#057017] hidden md:block text-white py-2 rounded">
              Register
            </button>
            <button
              className="px-4 bg-[#057017] md:hidden text-white py-2 rounded"
              onClick={() => setNav(!nav)}
            >
              Menu
            </button>
          </div>
        </nav>
      </header>
      <main className="bg-white text-black">
        <div className="h-[400px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[90vh]"
          >
            <SwiperSlide>
              <a href="#">
                <div className="bg-1"></div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="#">
                <div className="bg-2"></div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="#">
                <div className="bg-3"></div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="#">
                <div className="bg-4"></div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="#">
                <div className="bg-5"></div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="#">
                <div className="bg-6"></div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="#">
                <div className="bg-7"></div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
        <Section1 />
        <Section2 />
        <section className="my-20 px-0 md:px-32">
          <h3 className="text-center text-[#057017] text-4xl font-semibold">
            Meet some of our speakers
          </h3>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            // pagination={{
            //   type: "fraction",
            // }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper mt-6"
          >
            <SwiperSlide>
              <SpeakerCard
                img={speaker1}
                title={"  Bishop (Dr) Feb Idahosa"}
                text={" President, Benson Idahosa University"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SpeakerCard
                img={speaker2}
                title={"Frank Donga"}
                text={"Comedian, Entreprenuer"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SpeakerCard
                img={speaker3}
                title={"Dr Emeka Unachukwu"}
                text={"Founder, Develop U"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <SpeakerCard
                img={speaker4}
                title={"Dr Emeka Unachukwu"}
                text={"Founder, Develop U"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <SpeakerCard
                img={speaker5}
                title={"Dr Emeka Unachukwu"}
                text={"Founder, Develop U"}
              />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="my-20 px-0 md:px-32">
          <h3 className="text-center text-[#057017] text-4xl font-semibold">
            Meet our partners
          </h3>
          <p className="my-5 text-center px-9 md:px-0 md:mx-64">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a, sed
            lobortis nisi.
          </p>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper mt-6"
          >
            <SwiperSlide>
              <Image alt="icon" src={partner1} className="mx-auto py-3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="icon" src={partner2} className="mx-auto py-3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="icon" src={partner3} className="mx-auto py-3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="icon" src={partner4} className="mx-auto py-3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="icon" src={partner5} className="mx-auto py-3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="icon" src={partner6} className="mx-auto py-3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="icon" src={partner7} className="mx-auto py-3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="icon" src={partner8} className="mx-auto py-3" />
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
      <footer className="py-20 px-9 md:px-32 bg-[#057017] md:flex justify-between">
        <div>
          <div className="bg-white w-fit">
            <Image alt="icon" src={logo} />
          </div>
          <div className="flex text-white items-center gap-2 mt-12">
            <Image alt="icon" src={email} className="w-5" />
            <p className="text-white text-base font-normal opacity-70">
              makeinnigeriaproject@gmail.com
            </p>
          </div>
          <div className="flex text-white items-center gap-2 my-3 mb-8">
            <Image alt="icon" src={gps} className="w-5" />
            <p className="text-white text-base font-normal opacity-70">
              28b Flemming Avenue, Rumuomasi,
              <br /> Port Harcourt, Nigeria
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <a href="#">
                <div className="border w-fit rounded-full p-3">
                  <Image alt="icon" src={twitter} className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="border w-fit rounded-full p-3">
                  <Image alt="icon" src={facebook} className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="border w-fit rounded-full p-3">
                  <Image alt="icon" src={instagram} className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="border w-fit rounded-full p-3">
                  <Image alt="icon" src={linkedin} className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="text-white">
          <h3 className="text-white text-xl">Resources</h3>
          <div className="my-4">
            <a href="#" className="text-white text-base font-normal opacity-70">
              services
            </a>
          </div>
          <div className="my-4">
            <a href="#" className="text-white text-base font-normal opacity-70">
              Our Institute
            </a>
          </div>
          <div className="my-4">
            <a href="#" className="text-white text-base font-normal opacity-70">
              Our Gallery
            </a>
          </div>
          <div className="my-4">
            <a href="#" className="text-white text-base font-normal opacity-70">
              Blog
            </a>
          </div>
        </div>
        <div className="text-white">
          <h3 className="text-white text-xl">Usefull links</h3>
          <div className="my-4">
            <a href="#" className="text-white text-base font-normal opacity-70">
              Terms of Services
            </a>
          </div>
          <div className="my-4">
            <a href="#" className="text-white text-base font-normal opacity-70">
              Privacy Policy
            </a>
          </div>
          <div className="my-4">
            <a href="#" className="text-white text-base font-normal opacity-70">
              Cookie Policy
            </a>
          </div>
          <div className="my-4">
            <a href="#" className="text-white text-base font-normal opacity-70">
              Contact us
            </a>
          </div>
        </div>
        <div className="text-white">
          <h3 className="text-white text-xl">Newsletter</h3>

          <p className="text-white text-base font-normal opacity-70 mt-4">
            Sign up and receive the lastest news via email.
          </p>
          <div className=" mt-6">
            <input
              type="email"
              className="h-14 w-[260px] py-3 px-3 text-black outline-none bg-[#057017] border border-white rounded"
              placeholder="Email address"
            />
            <button className="px-4 bg-[#009C1A] w-[260px] md:w-fit  md:rounded-e-lg h-14">
              Send
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
