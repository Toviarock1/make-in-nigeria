import React from "react";
import Image from "next/image";

const SpeakerCard = ({ img, title, text }) => {
  return (
    <div>
      <Image src={img} width={360} />
      <div className="-mt-8">
        <h4 className="text-center text-black text-base font-semibold">
          {title}
        </h4>
        <p className="text-black text-sm font-normal text-center">{text}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
