import React from "react";
import LamborghiniImg from "../static/lamborghini.jpg";
import DetailCar from "../components/DetailCar";

export default () => (
  <DetailCar
    text="Lamborghini"
    imageFile={LamborghiniImg}
    description="Founded in 1963, Automobili Lamborghini is headquartered in Sant’Agata Bolognese, in Northern Italy. The Lamborghini Huracán, which made its world debut at the Geneva Motor Show in 2014, in the Huracán Spyder and rear wheel-drive version released in 2015, are the successors to the iconic Gallardo. With their innovative technology and exceptional performance, they redefine the driving experience for luxury super sports cars. The Coupé and Roadster versions of the Aventador and the Aventador"
  />
);
