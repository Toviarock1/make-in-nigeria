import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import Card from "./Card";
import conferenece from "@/public/conference.svg";
import teacher from "@/public/Teacher.svg";
import slot from "@/public/Slot.svg";
import discoBall from "@/public/Discoball.svg";

const Section2 = () => {
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
    <section className="my-20 px-9 md:px-32">
      <motion.h3
        ref={ref}
        variants={welcomeTextVariant}
        initial="hidden"
        animate={control}
        transition={{ duration: 1 }}
        className="text-center text-[#057017] text-4xl font-semibold"
      >
        About MIN Conference 2023
      </motion.h3>
      <motion.p
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
        className="text-center text-[#051114] text-xl font-medium mt-6"
      >
        MAKE IN NIGERIA is an exceptionally packaged event designed as a
        conference, as well as an exhibition for products and services of
        various companies and entrepreneurs. The event is open to government
        parastatals corporate organisations, NGOs, Investors, CEOs,
        Professionals, Chambers of Commerce, Embassies, Celebrities, SMEs,
        Startups, Retirees, Business enthusiasts, Students, and the general
        public.
      </motion.p>
      <div className="md:flex justify-between gap-7 mt-6">
        <Card
          img1={conferenece}
          title={"Conference"}
          paragraph={
            "Make in Nigeria Conference brings together a diverse audience to hear from world-class speakers."
          }
        />

        <Card
          img1={teacher}
          title={"Masterclass"}
          paragraph={
            "Highly Subsidized masterclasses on 6 core areas; Entrepreneurship, Leadership, Management..."
          }
        />

        <Card
          img1={slot}
          title={"Raffledraw"}
          paragraph={
            "With N1,000 you can become a proud owner of 3 Bedroom apartment and 2 plots of land are also up for grabs"
          }
        />

        <Card
          img1={discoBall}
          title={"Entertainment"}
          paragraph={
            "Afford yourself the opportunity to win grants for your business"
          }
        />
      </div>
    </section>
  );
};

export default Section2;
