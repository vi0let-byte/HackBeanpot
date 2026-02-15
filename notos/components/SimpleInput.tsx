import { FC } from "react";

interface InputProps {
  placeholder: string;
}

const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="input-wrapper">
      <textarea
        className="text-center w-45.5 h-23 bg-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
