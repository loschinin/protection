import React, { Dispatch, FC } from "react";
import block from "bem-cn-lite";
import { ProfitState } from "../Modal";
import "./style.scss";
import SmallPriceIcon from "../Icons/SmallPriceIcon";
import DeleteProfitIcon from "../Icons/DeleteProfitIcon";
import { IconButton } from "@material-ui/core";
import { v4 as uniqueId } from "uuid";

const p = block("profit-list");
const ProfitList: FC<{
  itemProfitState: ProfitState[];
  setItemProfitState: Dispatch<ProfitState[]>;
  setCounter: Dispatch<(prev: number) => number>;
}> = ({ itemProfitState, setItemProfitState, setCounter }) => {
  return (
    <div className={p()}>
      {itemProfitState.map((item, index) => (
        <div key={uniqueId()} className={p("profit-list-item")}>
          <div className={p("price-amount")}>
            <div className={p("price-block")}>
              <SmallPriceIcon />
              <div className={p("price")}>{item.price}</div>
            </div>
            <div className={p("amount")}>{item.sellAmount}%</div>
          </div>
          <IconButton
            className={p("del")}
            onClick={() => {
              setItemProfitState(itemProfitState.filter((_, i) => i !== index));
              setCounter((prev) => prev - 1);
            }}
          >
            <DeleteProfitIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default ProfitList;
