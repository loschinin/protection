import React, { Dispatch, FC, useState } from "react";
import { Modal } from "@material-ui/core";
import block from "bem-cn-lite";
import SellAmountSlider from "../SellAmountSlider";
import InputPriceBlock from "../InputPriceBlock";
import "./style.scss";
import ProfitList from "../ProfitList";
import Header from "../Header";
import ButtonsBlock from "../ButtonsBlock";
import InfoBlock from "../shared/InfoBlock";

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
  const clearProfitState = () => {
    setCounter(() => 0);
    setProfitState(initialProfitState);
    setItemProfitState([]);
    setOpenModal(false);
  };

  return (
    <Modal open={openModal} onClose={() => clearProfitState()}>
      <div className={m()}>
        <Header counter={counter} clearProfitState={clearProfitState} />
        <ProfitList
          itemProfitState={itemProfitState}
          setItemProfitState={setItemProfitState}
          setCounter={setCounter}
        />
        {counter > 0 && (
          <InfoBlock
            label={"Sum. projected profit"}
            sumProfit={15122.44}
            value={"usdt"}
          />
        )}
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
            <InfoBlock label={"Price change"} value={20} />
            <InfoBlock
              label={"Projected profit"}
              sumProfit={15122.44}
              value={"usdt"}
            />
          </>
        )}
        <ButtonsBlock
          counter={counter}
          setOpenModal={setOpenModal}
          clearProfitState={clearProfitState}
        />
      </div>
    </Modal>
  );
};

export default AppModal;
