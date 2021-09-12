import React, { Dispatch, FC } from "react";
import { Slider } from "@material-ui/core";
import block from "bem-cn-lite";
import { ProfitState } from "../Modal";
import "./style.scss";

const s = block("slider-block");

const SellAmountSlider: FC<{
  values: ProfitState;
  setValues: Dispatch<ProfitState>;
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
          value={values.sellAmount}
          onChange={(_, val) => sliderHandler(val)}
        />
        <div className={s("slider-value")}>{values.sellAmount}%</div>
      </div>
    </div>
  );
};

export default SellAmountSlider;
