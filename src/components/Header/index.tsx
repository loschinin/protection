import React, { FC } from "react";
import block from "bem-cn-lite";
import "./style.scss";

const h = block("header");
const Header: FC<{ counter: number }> = ({ counter }) => {
  return (
    <div className={h()}>
      Take Profit {counter}
      <span>/5</span>
    </div>
  );
};

export default Header;
