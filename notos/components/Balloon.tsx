import React, { FC } from "react";

interface BalloonProps {
  color: string;
}

export const SingleBalloon: FC<BalloonProps> = ({ color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="237"
        height="295"
        fill="none"
        viewBox="0 0 237 295"
      >
        <path
          fill={color}
          fillRule="evenodd"
          d="M190.863 198.5C218.926 178.292 237 146.609 237 110.989 237 49.961 183.946.489 118.5.489S0 49.96 0 110.989c0 35.967 18.428 67.92 46.96 88.098L86 243.041h65.301z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M164.162 198.377c17.761-20.245 29.201-51.987 29.201-87.673 0-61.14-33.579-110.704-75-110.704s-75 49.564-75 110.704c0 36.033 11.663 68.046 29.721 88.261L97.793 243h41.33z"
          clipRule="evenodd"
        ></path>
        <path
          fill={color}
          fillRule="evenodd"
          d="M146.869 198.377c11.249-20.245 18.494-51.987 18.494-87.673C165.363 49.564 144.096 0 117.863 0c-26.234 0-47.5 49.564-47.5 110.704 0 36.033 7.386 68.046 18.823 88.261L104.835 243h26.176z"
          clipRule="evenodd"
        ></path>
        <path fill="#E09D51" d="M85.363 256h66v39h-66z"></path>
        <path
          fill="#000"
          d="M85.363 243h3v13h-3zM148.363 243h3v13h-3zM116.363 243h3v13h-3z"
        ></path>
      </svg>
    </div>
  );
};
