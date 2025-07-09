import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

interface IButtonProp {
  onClick: () => void;
  label: string;
  bgHoverColor?: string;
  backgroundColor?: string;
  textColor?: string;
  textColorOnHover?: string;
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

const btnSizeClasses = {
  sm: "py-2 px-4 h-12",
  md: "py-3 px-6 h-14",
  lg: "py-4 px-8 h-16",
};

const Button: React.FC<IButtonProp> = ({
  onClick,
  label,
  bgHoverColor = "#ffc71f", // inline hover bg color
  backgroundColor = "bg-data-text-main", // tailwind default
  textColor = "text-data-dark-bg",              // tailwind default
  textColorOnHover = "#000000",          // inline text color hover
  size = "md",
  iconOnly = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex w-fit cursor-pointer" onClick={onClick}>
      {!iconOnly && (
        <div
          className={`${btnSizeClasses[size]} min-w-28 rounded-full flex justify-center items-center ease-in-out duration-300 ${backgroundColor}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? bgHoverColor : undefined,
          }}
        >
          <p
            className={`ease-in-out duration-300 ${textColor}`}
            style={{
              color: isHovered ? textColorOnHover : undefined,
            }}
          >
            {label}
          </p>
        </div>
      )}
    </div>
  );
};

export default Button;
