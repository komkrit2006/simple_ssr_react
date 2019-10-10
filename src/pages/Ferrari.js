import React from "react";
import FerrariImg from "../static/ferrari.jpeg";
import DetailCar from "../components/DetailCar";

export default () => (
  <DetailCar
    text="Ferrari"
    imageFile={FerrariImg}
    description="This was a day to remember for the Ferrari Driver Academy and Robert Shwartzman as the Russian driver’s second place finish in the first F3 race of the weekend."
  />
);
