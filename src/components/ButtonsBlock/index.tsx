import React, { Dispatch, FC } from "react";
import block from "bem-cn-lite";
import { IconButton } from "@material-ui/core";
import "./style.scss";
import { initialProfitState, ProfitState } from "../Modal";
const b = block("buttons");

const ButtonsBlock: FC<{
  counter: number;
  setOpenModal: Dispatch<boolean>;
  setItemProfitState: Dispatch<ProfitState[]>;
  setValues: Dispatch<ProfitState>;
  setCounter: Dispatch<(prev: number) => number>;
}> = ({ counter, setOpenModal, setItemProfitState, setValues, setCounter }) => {
  return (
    <div
      className={b()}
      style={{ flexDirection: counter > 0 ? "row" : "column" }}
    >
      <IconButton
        className={b("cancel-btn")}
        onClick={() => {
          setCounter(() => 0);
          setValues(initialProfitState);
          setItemProfitState([]);
          setOpenModal(false);
        }}
      >
        Cancel
      </IconButton>
      {counter > 0 && (
        <IconButton
          className={b("confirm-btn")}
          onClick={() => setOpenModal(false)}
        >
          Confirm
        </IconButton>
      )}
    </div>
  );
};

export default ButtonsBlock;
