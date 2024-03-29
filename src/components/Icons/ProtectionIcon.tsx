import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import React, { FC } from "react";

const ProtectionIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.19 3.37625L8.19 0.26625C8.7 0.03625 9.3 0.03625 9.81 0.26625L16.81 3.37625C17.53 3.69625 18 4.41625 18 5.20625V9.90625C18 15.4563 14.16 20.6462 9 21.9062C3.84 20.6462 0 15.4563 0 9.90625V5.20625C0 4.41625 0.47 3.69625 1.19 3.37625ZM16 10.8962H9V2.09625L2 5.20625V10.9062H9V19.8363C12.72 18.6863 15.47 15.0163 16 10.8962Z"
        fill="#EEBB50"
      />
    </svg>
  </SvgIcon>
);
export default ProtectionIcon;
