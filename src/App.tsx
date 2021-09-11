import { Button } from "@material-ui/core";
import React, { FC, useState } from "react";
import block from "bem-cn-lite";
import "./App.scss";
import ProtectionIcon from "./components/icons/ProtectionIcon";
import AppModal from "./components/modal";

const a = block("app");

const App: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={a()}>
      <Button
        className={a("protection_btn")}
        startIcon={<ProtectionIcon />}
        disableRipple
        type="button"
        onClick={() => setOpenModal(true)}
      >
        Add protection
      </Button>
      <AppModal openModal={openModal} />
    </div>
  );
};

export default App;
