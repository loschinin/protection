import {
  Button,
  createStyles,
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  Modal,
  Theme,
} from "@material-ui/core";
import React, { FC, useState } from "react";
import block from "bem-cn-lite";
import clsx from "clsx";
import "./App.scss";
import ProtectionIcon from "./icons/ProtectionIcon";

const b = block("app");
const m = block("modal");

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);
const App: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) =>
      setValues({ ...values, [prop]: event.target.value });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={b()}>
      <Button
        className={b("protection_btn")}
        startIcon={<ProtectionIcon />}
        disableRipple
        type="button"
        onClick={handleOpen}
      >
        Add protection
      </Button>
      <Modal open={open}>
        <div className={m()}>
          <div className={m("header")}>Take Profit</div>

          <div>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <ProtectionIcon />
                      ) : (
                        <ProtectionIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
