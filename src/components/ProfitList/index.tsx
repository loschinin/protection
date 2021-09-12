import React, { Dispatch, FC } from "react";
import block from "bem-cn-lite";
import { ItemProfitState } from "../modal";
import "./style.scss";
import SmallPriceIcon from "../icons/SmallPriceIcon";
import DeleteProfitIcon from "../icons/DeleteProfitIcon";
import { IconButton } from "@material-ui/core";

const p = block("profit-list");
const ProfitList: FC<{
  itemProfitState: ItemProfitState[];
  setItemProfitState: Dispatch<ItemProfitState[]>;
  setCounter: Dispatch<(prev: number) => number>;
}> = ({ itemProfitState, setItemProfitState, setCounter }) => {
  //const deleteProfitItemHandler

  return (
    <div className={p()}>
      {itemProfitState.map((i, index) => (
        <div key={index} className={p("profit-list-item")}>
          <div className={p("price-amount")}>
            <div className={p("price-block")}>
              <SmallPriceIcon />
              <div className={p("price")}>{i.price}</div>
            </div>
            <div className={p("amount")}>{i.sellAmount}%</div>
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
