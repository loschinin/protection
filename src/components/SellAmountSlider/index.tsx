import React, { Dispatch, FC } from "react";
import { Slider } from "@material-ui/core";
import block from "bem-cn-lite";
import { ItemProfitState } from "../modal";
import "./style.scss";

const s = block("slider-block");

const SellAmountSlider: FC<{
  values: ItemProfitState;
  setValues: Dispatch<ItemProfitState>;
}> = ({ values, setValues }) => {
  const sliderHandler = (val: number | number[]) => {
    if (!Array.isArray(val)) setValues({ ...values, sellAmount: val });
  };
  return (
    <div className={s()}>
      <div className={s("slider-label")}>Sell BTC amount</div>
      <div className={s("slider-row")}>
        <Slider
          className={s("slider")}
          valueLabelDisplay="off"
          defaultValue={20}
          onChange={(_, val) => sliderHandler(val)}
        />
        <div className={s("slider-value")}>{values.sellAmount}%</div>
      </div>
    </div>
  );
};

export default SellAmountSlider;
