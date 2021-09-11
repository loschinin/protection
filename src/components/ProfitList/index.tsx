import React, { FC } from "react";
import block from "bem-cn-lite";
import { ItemProfitState } from "../modal";
import "./style.scss";

const p = block("profit-list");
const ProfitList: FC<{ itemProfitState: ItemProfitState[] }> = ({
  itemProfitState,
}) => {
  return (
    <div className={p()}>
      {itemProfitState.map((i, index) => (
        <div key={index} className={p("profit-list-item")}>
          {i.price}
          {i.sellAmount}
        </div>
      ))}
    </div>
  );
};

export default ProfitList;
