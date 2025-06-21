import React from "react";



const textSizes = {
  sm: "text-sm",
  lg: "text-lg",
  xl: "text-xl"
}

interface IChip {
  border?: boolean;
  label:string;
  className?:string;
  bgColor?:string;
  textColor?:string;
  textSize?: keyof typeof textSizes
}

const Chip: React.FC<IChip> = ({ border = true,  label, className,textSize = "lg", bgColor, textColor }) => {

  return (
    <div className={`px-5 py-2 rounded-full font-semibold ${bgColor} ${textColor} ${textSizes[textSize]} ${border ? "border-2" : ""  } ${className}`}>{label}</div>
  );
};

export default Chip;
