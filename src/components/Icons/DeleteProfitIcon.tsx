import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import React, { FC } from "react";

const DeleteProfitIcon: FC<SvgIconProps> = (props) => (
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47714 2 1.99999 6.47715 1.99999 12C1.99999 17.5228 6.47714 22 12 22Z"
        fill="#BF3B4B"
      />
      <path
        d="M16.2782 7.79265C15.8877 7.40212 15.2545 7.40212 14.864 7.79265L12.0353 10.6214L9.20686 7.7929C8.81633 7.40237 8.18317 7.40237 7.79264 7.7929C7.40212 8.18342 7.40212 8.81659 7.79264 9.20711L10.6211 12.0356L7.79294 14.8637C7.40242 15.2542 7.40242 15.8874 7.79294 16.2779C8.18347 16.6685 8.81663 16.6685 9.20716 16.2779L12.0353 13.4498L14.8637 16.2782C15.2542 16.6687 15.8874 16.6687 16.2779 16.2782C16.6684 15.8877 16.6685 15.2545 16.2779 14.864L13.4495 12.0356L16.2782 9.20686C16.6688 8.81634 16.6688 8.18317 16.2782 7.79265Z"
        fill="#BF3B4B"
      />
    </svg>
  </SvgIcon>
);
export default DeleteProfitIcon;
