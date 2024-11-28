import React from "react";

interface ButtonProps {
  text: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
