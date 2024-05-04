import React from "react";
import Image1 from "../assets/LowIndecisive.png";
import Image2 from "../assets/SlightlyIndecisive.png";
import Image3 from "../assets/ModerateIndecisive.png";
import Image4 from "../assets/HighIndecisive.png";
import { t } from "i18next";
type Props = {
  score: number;
  show: boolean;
};

const ResultDescription = ({ score, show }: Props) => {
  const descriptions: { title: string; hint: string; description: string }[] =
    t("result:descriptions", { returnObjects: true });
  const type = score <= -11 ? 0 : score <= 0 ? 1 : score <= 11 ? 2 : 3;
  const Image =
    type === 0 ? Image1 : type === 1 ? Image2 : type === 2 ? Image3 : Image4;
  return (
    <div
      className={`row max-phone  w-100 animation align-items-center ${
        show ? "opacity-100 mt-5" : "opacity-0 mt-3"
      }`}
    >
      <div className="col-12 col-md-5">
        <img src={Image} alt="result icon" className="result-image" />
      </div>
      <div className="col-12 col-md-7 d-flex flex-column h-100 justify-content-center">
        <span className="mt-4 fw-bold text-white fs-4">
          {descriptions[type].title} <br />
          {descriptions[type].hint}
        </span>
        <span className="mt-2 fw-light text-white fs-6">
          {descriptions[type].description}
        </span>
      </div>
    </div>
  );
};

export default ResultDescription;
