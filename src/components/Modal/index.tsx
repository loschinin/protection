import React, { Dispatch, FC, useState } from "react";
import { Modal } from "@material-ui/core";
import block from "bem-cn-lite";
import SellAmountSlider from "../SellAmountSlider";
import InputPriceBlock from "../InputPriceBlock";
import "./style.scss";
import ProfitList from "../ProfitList";
import Header from "../Header";
import ButtonsBlock from "../ButtonsBlock";

export interface ProfitState {
  price: number;
  sellAmount: number;
}
const m = block("modal");
export const initialProfitState = { price: 0, sellAmount: 20 };
const AppModal: FC<{ openModal: boolean; setOpenModal: Dispatch<boolean> }> = ({
  openModal,
  setOpenModal,
}) => {
  const [profitState, setProfitState] =
    useState<ProfitState>(initialProfitState);
  const [counter, setCounter] = useState(0);
  const [itemProfitState, setItemProfitState] = useState<ProfitState[]>([]);

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <div className={m()}>
        <Header
          counter={counter}
          setOpenModal={setOpenModal}
          setItemProfitState={setItemProfitState}
          setValues={setProfitState}
          setCounter={setCounter}
        />
        <ProfitList
          itemProfitState={itemProfitState}
          setItemProfitState={setItemProfitState}
          setCounter={setCounter}
        />
        {counter < 5 && (
          <>
            <InputPriceBlock
              values={profitState}
              setValues={setProfitState}
              counter={counter}
              setCounter={setCounter}
              itemProfitState={itemProfitState}
              setItemProfitState={setItemProfitState}
            />
            <SellAmountSlider values={profitState} setValues={setProfitState} />
          </>
        )}
        <ButtonsBlock
          counter={counter}
          setOpenModal={setOpenModal}
          setItemProfitState={setItemProfitState}
          setValues={setProfitState}
          setCounter={setCounter}
        />
      </div>
    </Modal>
  );
};

export default AppModal;
