import React, { FC } from "react";
import block from "bem-cn-lite";
import "./style.scss";
import CancelIcon from "../Icons/CancelIcon";
import { IconButton } from "@material-ui/core";

const h = block("header");
const Header: FC<{
  counter: number;
  clearProfitState: () => void;
}> = ({ counter, clearProfitState }) => {
  return (
    <div className={h()}>
      Take Profit {counter}
      <span>/5</span>
      <IconButton className={h("cancel")} onClick={() => clearProfitState()}>
        <CancelIcon />
      </IconButton>
    </div>
  );
};

export default Header;
