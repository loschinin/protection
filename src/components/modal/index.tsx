import React, { ChangeEvent, FC } from "react";
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

interface State {
  price: number;
  showPrice: boolean;
}
const m = block("modal");
const f = block("form");

const AppModal: FC<{ openModal: boolean }> = ({ openModal }) => {
  const [values, setValues] = React.useState<State>({
    price: 55000,
    showPrice: false,
  });

  const handleChangePrice = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const numberedPrice = +event.target.value;
    if (!isNaN(numberedPrice)) setValues({ ...values, price: numberedPrice });
  };

  const handleClickShowPrice = () => {
    setValues({ ...values, showPrice: !values.showPrice });
  };
  return (
    <Modal open={openModal}>
      <div className={m()}>
        <div className={m("header")}>Take Profit</div>

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

          <IconButton
            className={m("add-price-btn")}
            onClick={handleClickShowPrice}
          >
            <PlusIcon />
          </IconButton>
        </div>
      </div>
    </Modal>
  );
};

export default AppModal;
