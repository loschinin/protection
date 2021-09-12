import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import React, { FC } from "react";
const InputEndIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9"
        y="15"
        width="0.75"
        height="7.5"
        rx="0.375"
        transform="rotate(-180 9 15)"
        fill="#818C99"
      />
      <path
        d="M10.1297 13.6757C10.386 13.4414 10.8015 13.4414 11.0578 13.6757C11.3141 13.9101 11.3141 14.2899 11.0578 14.5243L9.08904 16.3243C8.83276 16.5586 8.41724 16.5586 8.16096 16.3243L6.19221 14.5243C5.93593 14.2899 5.93593 13.9101 6.19221 13.6757C6.44849 13.4414 6.86401 13.4414 7.12029 13.6757L8.625 15.0515L10.1297 13.6757Z"
        fill="#818C99"
      />
      <rect
        width="0.75"
        height="7.5"
        rx="0.375"
        transform="matrix(-1 -1.19249e-08 -1.19249e-08 1 15.25 9)"
        fill="#818C99"
      />
      <path
        d="M16.3797 10.3243C16.636 10.5586 17.0515 10.5586 17.3078 10.3243C17.5641 10.0899 17.5641 9.71005 17.3078 9.47574L15.339 7.67574C15.0828 7.44142 14.6672 7.44142 14.411 7.67574L12.4422 9.47574C12.1859 9.71005 12.1859 10.0899 12.4422 10.3243C12.6985 10.5586 13.114 10.5586 13.3703 10.3243L14.875 8.94853L16.3797 10.3243Z"
        fill="#818C99"
      />
      <rect
        x="0.5"
        y="23.5"
        width="23"
        height="23"
        rx="11.5"
        transform="rotate(-90 0.5 23.5)"
        stroke="#818C99"
      />
    </svg>
  </SvgIcon>
);
export default InputEndIcon;
