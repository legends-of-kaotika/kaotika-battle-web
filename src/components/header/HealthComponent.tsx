import React from "react";
import life_bar_left from "../../../public/life_bar_left.gif";
import life_bar_right from "../../../public/life_bar_rigth.gif";

interface HealthComponentInterface {

}
const HealthComponent: React.FC<HealthComponentInterface> = ({ }) => {
  return (
    <div className="flex flex-col w-1/12 h-auto justify-center items-center">
      <div className="flex flex-col">
        <div className="relative flex flex-col items-center">
          <img className="w-200 h-12 mb-2" src={life_bar_left} alt="life_bar_left" />
          <img className="w-200 h-12 mb-2" src={life_bar_right} alt="life_bar_right" />
        </div>
      </div>
    </div>
  );
};
export default HealthComponent;