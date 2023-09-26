import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import Image from "next/image";
import ceo from "@/public/ceo.svg";

const Section1 = () => {
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
    <section className="mt-[400px] md:mt-[28%] px-9 md:px-32">
      <div className="md:flex">
        <motion.div
          ref={ref}
          variants={welcomeImgVariant}
          initial="hidden"
          animate={control}
          transition={{ duration: 1.6 }}
          className="md:w-2/4 flex justify-center"
        >
          <Image src={ceo} width={447} />
        </motion.div>
        <div className="md:w-2/4">
          <motion.h2
            ref={ref}
            variants={welcomeTextVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.1 }}
            className="text-[#057017] font-bold text-5xl md:text-6xl"
          >
            Think,
            <br className="hidden md:block" /> Make, Grow.
          </motion.h2>
          <div className="flex mt-3 w-4/5">
            <div className="bg-[#E53B06] w-full h-1"></div>
            <div className="bg-[#FCB601] w-full h-1"></div>
            <div className="bg-[#057017] w-full h-1"></div>
          </div>
          <div className="md:w-3/4 text-2xl font-medium leading-7 mt-12">
            <motion.p
              ref={ref}
              variants={welcomeTextVariant}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              Make in Nigeria is a project designed to create an environment
              that helps Nigerian businesses to do more and be more. This is in
              a bid to help the Nigerian economy and facilitate her
              infrastructural development.
            </motion.p>
            <motion.p
              ref={ref}
              variants={welcomeTextVariant}
              initial="hidden"
              animate={control}
              transition={{ duration: 1 }}
            >
              Our unique value proposition is locked in the TMG (Think Make
              Grow) model dispensed through our event (Make in Nigeria
              Exhibition and Conference) and our Community (MIN Community).
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
