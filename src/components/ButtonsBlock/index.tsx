import React, { Dispatch, FC } from "react";
import block from "bem-cn-lite";
import { IconButton } from "@material-ui/core";
import "./style.scss";
const b = block("buttons");

const ButtonsBlock: FC<{
  counter: number;
  setOpenModal: Dispatch<boolean>;
  clearProfitState: () => void;
}> = ({ counter, setOpenModal, clearProfitState }) => {
  return (
    <div
      className={b()}
      style={{ flexDirection: counter > 0 ? "row" : "column" }}
    >
      <IconButton
        className={b("cancel-btn")}
        onClick={() => clearProfitState()}
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
