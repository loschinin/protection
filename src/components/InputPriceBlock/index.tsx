import React, { ChangeEvent, Dispatch, FC, useState } from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import InputStartUpArrowIcon from "../icons/InputStartUpArrowIcon";
import InputStartIcon from "../icons/InputStartIcon";
import InputEndIcon from "../icons/InputEndIcon";
import PlusIcon from "../icons/PlusIcon";
import block from "bem-cn-lite";
import { ItemProfitState } from "../modal";
import "./style.scss";

const i = block("input-price-block");
const f = block("form");

const InputPriceBlock: FC<{
  values: ItemProfitState;
  setValues: Dispatch<ItemProfitState>;
  counter: number;
  setCounter: Dispatch<(prev: number) => number>;
  itemProfitState: ItemProfitState[];
  setItemProfitState: Dispatch<ItemProfitState[]>;
}> = ({
  values,
  setValues,
  counter,
  setCounter,
  itemProfitState,
  setItemProfitState,
}) => {
  const handleChangePrice = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const numberedPrice = +event.target.value;
    if (!isNaN(numberedPrice)) setValues({ ...values, price: numberedPrice });
  };
  const [isIconAndInfo, setIsIconAndInfo] = useState(false);

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
    <div className={i()}>
      <FormControl variant={"filled"} className={f()}>
        <InputLabel className={f("label")}>
          Price {isIconAndInfo ? "change %" : ""}
        </InputLabel>
        <Input
          className={f("input")}
          startAdornment={
            <InputAdornment className={f("adornment")} position="end">
              {isIconAndInfo ? <InputStartUpArrowIcon /> : <InputStartIcon />}
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
                onClick={() => setIsIconAndInfo(!isIconAndInfo)}
              >
                <InputEndIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <IconButton className={i("add-price-btn")} onClick={handleAddBlock}>
        <PlusIcon />
      </IconButton>
    </div>
  );
};

export default InputPriceBlock;
