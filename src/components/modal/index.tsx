import React, { FC, useState } from "react";
import { Modal } from "@material-ui/core";
import block from "bem-cn-lite";
import SellAmountSlider from "../SellAmountSlider";
import InputPriceBlock from "../InputPriceBlock";
import "./style.scss";
import ProfitList from "../ProfitList";
import Header from "../Header";

export interface ItemProfitState {
  price: number;
  sellAmount: number;
}
const m = block("modal");

const AppModal: FC<{ openModal: boolean }> = ({ openModal }) => {
  const [values, setValues] = useState<ItemProfitState>({
    price: 0,
    sellAmount: 20,
  });
  const [counter, setCounter] = useState(0);
  const [itemProfitState, setItemProfitState] = useState<ItemProfitState[]>([]);

  return (
    <Modal open={openModal}>
      <div className={m()}>
        <Header counter={counter} />
        <ProfitList
          itemProfitState={itemProfitState}
          setItemProfitState={setItemProfitState}
          setCounter={setCounter}
        />
        {counter < 5 && (
          <>
            <InputPriceBlock
              values={values}
              setValues={setValues}
              counter={counter}
              setCounter={setCounter}
              itemProfitState={itemProfitState}
              setItemProfitState={setItemProfitState}
            />
            <SellAmountSlider values={values} setValues={setValues} />
          </>
        )}
      </div>
    </Modal>
  );
};

export default AppModal;
