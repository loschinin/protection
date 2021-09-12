import React, { Dispatch, FC } from "react";
import block from "bem-cn-lite";
import "./style.scss";
import CancelIcon from "../Icons/CancelIcon";
import { initialProfitState, ProfitState } from "../Modal";
import { IconButton } from "@material-ui/core";

const h = block("header");
const Header: FC<{
  counter: number;
  setOpenModal: Dispatch<boolean>;
  setItemProfitState: Dispatch<ProfitState[]>;
  setValues: Dispatch<ProfitState>;
  setCounter: Dispatch<(prev: number) => number>;
}> = ({ counter, setCounter, setValues, setItemProfitState, setOpenModal }) => {
  return (
    <div className={h()}>
      Take Profit {counter}
      <span>/5</span>
      <IconButton
        className={h("cancel")}
        onClick={() => {
          setCounter(() => 0);
          setValues(initialProfitState);
          setItemProfitState([]);
          setOpenModal(false);
        }}
      >
        <CancelIcon />
      </IconButton>
    </div>
  );
};

export default Header;
