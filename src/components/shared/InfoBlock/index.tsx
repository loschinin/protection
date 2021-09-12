import React, { FC } from "react";
import block from "bem-cn-lite";
import "./style.scss";
const info = block("info-block");

const InfoBlock: FC<{
  label: string;
  sumProfit?: number;
  value: string | number;
}> = ({ label, sumProfit, value }) => {
  return (
    <div className={info()}>
      <div className={info("label")}>{label}</div>
      <div className={info("dots")} />
      <div className={info("sum-profit")}>{sumProfit}</div>
      <div className={info("value")}>
        {typeof value === "number" ? `+${value}%` : value}
      </div>
    </div>
  );
};

export default InfoBlock;
