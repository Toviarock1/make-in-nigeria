import React, { useEffect } from "react";
import Image from "next/image";
import nextbtnIcon from "@/public/nextbtn.svg";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

const Card = ({ img1, title, paragraph }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

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
    <motion.div
      ref={ref}
      variants={{
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
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 1 }}
      className="w-72 rounded-md pt-10 shadow-md card hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <div>
        <div className="bg-[#009C1A] w-fit p-6 rounded-full mx-auto opacity-95">
          <Image src={img1} width={106} />
        </div>
      </div>
      <div className="pb-10">
        <h6 className="text-black text-center text-base font-medium mt-10 mb-4">
          {title}
        </h6>
        <div className=" h-20">
          <p className="text-black text-center text-sm font-normal px-4">
            {paragraph}
          </p>
        </div>
        <div className="flex justify-center pt-4">
          <Image src={nextbtnIcon} alt="next button" />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
