import React, { FC } from "react";
const PlusIcon: FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="#5683FF" />
    <rect
      x="0.5"
      y="0.5"
      width="31"
      height="31"
      rx="15.5"
      fill="url(#paint0_linear)"
    />
    <path
      d="M6 15.9998C6 15.3095 6.55964 14.7498 7.25 14.7498L24.75 14.7498C25.4404 14.7498 26 15.3095 26 15.9998C26 16.6902 25.4404 17.2498 24.75 17.2498L7.25 17.2498C6.55964 17.2498 6 16.6902 6 15.9998Z"
      fill="white"
    />
    <path
      d="M15.9997 6C16.6901 6 17.2497 6.55964 17.2497 7.25V24.75C17.2497 25.4404 16.6901 26 15.9997 26C15.3094 26 14.7497 25.4404 14.7497 24.75V7.25C14.7497 6.55964 15.3094 6 15.9997 6Z"
      fill="white"
    />
    <rect
      x="0.5"
      y="0.5"
      width="31"
      height="31"
      rx="15.5"
      stroke="url(#paint1_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="16"
        y1="25"
        x2="16"
        y2="32"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="paint1_linear"
        x1="16"
        y1="0"
        x2="16"
        y2="32"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
  </svg>
);
export default PlusIcon;
