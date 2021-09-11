import React, { ChangeEvent, FC, useState } from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
} from "@material-ui/core";
import InputStartUpArrowIcon from "../icons/InputStartUpArrowIcon";
import InputStartIcon from "../icons/InputStartIcon";
import InputEndIcon from "../icons/InputEndIcon";
import PlusIcon from "../icons/PlusIcon";
import block from "bem-cn-lite";
import SellAmountSlider from "../SellAmountSlider";

export interface State {
  price: number;
  showPrice: boolean;
  sellAmount: number;
}
const m = block("modal");
const f = block("form");
const p = block("profit-list-item");

const AppModal: FC<{ openModal: boolean }> = ({ openModal }) => {
  const [values, setValues] = useState<State>({
    price: 0,
    showPrice: false,
    sellAmount: 0,
  });
  const [counter, setCounter] = useState(0);
  const handleChangePrice = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const numberedPrice = +event.target.value;
    if (!isNaN(numberedPrice)) setValues({ ...values, price: numberedPrice });
  };

  const handleClickShowPrice = () => {
    setValues({ ...values, showPrice: !values.showPrice });
  };
  const [itemProfitState, setItemProfitState] = useState<
    { price: number; sellAmount: number }[]
  >([]);
  const handleAddBlock = () => {
    if (counter < 5) {
      setCounter((prev) => prev + 1);
      setItemProfitState([
        ...itemProfitState,
        { price: values.price, sellAmount: values.sellAmount },
      ]);
    }
  };

  return (
    <Modal open={openModal}>
      <div className={m()}>
        <div className={m("header")}>
          Take Profit {counter}
          <span>/5</span>
        </div>
        <div className={m("profit-list")}>
          {itemProfitState &&
            itemProfitState.map((i, index) => (
              <div key={index} className={p()}>
                {i.price}
                <br />
                {i.sellAmount}
              </div>
            ))}
        </div>
        <div className={m("input-price-block")}>
          <FormControl variant={"filled"} className={f()}>
            <InputLabel className={f("label")}>
              Price {values.showPrice ? "change %" : ""}
            </InputLabel>
            <Input
              className={f("input")}
              startAdornment={
                <InputAdornment className={f("adornment")} position="end">
                  {values.showPrice ? (
                    <InputStartUpArrowIcon />
                  ) : (
                    <InputStartIcon />
                  )}
                </InputAdornment>
              }
              disableUnderline
              fullWidth
              value={values.price}
              onChange={(e) => handleChangePrice(e)}
              endAdornment={
                <InputAdornment position="end" className={f("adornment")}>
                  <IconButton
                    className={f("button")}
                    onClick={handleClickShowPrice}
                  >
                    <InputEndIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <IconButton className={m("add-price-btn")} onClick={handleAddBlock}>
            <PlusIcon />
          </IconButton>
        </div>
        <SellAmountSlider values={values} setValues={setValues} />
      </div>
    </Modal>
  );
};

export default AppModal;
