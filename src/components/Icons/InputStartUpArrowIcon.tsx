import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import React, { FC } from "react";

const InputStartUpArrowIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        fill="#31B984"
      />
      <path
        d="M12 10.4581L6.98649 14.8576C6.73302 15.0731 6.35451 15.0403 6.14107 14.7845C5.92762 14.5286 5.96006 14.1466 6.21353 13.9312L11.4035 9.21355C11.7529 8.91655 12.2673 8.93089 12.6 9.2469L17.8112 13.9534C18.0525 14.1826 18.064 14.5659 17.8369 14.8094C17.6098 15.053 17.2301 15.0646 16.9888 14.8354L12 10.4581Z"
        fill="#31B984"
      />
    </svg>
  </SvgIcon>
);
export default InputStartUpArrowIcon;
