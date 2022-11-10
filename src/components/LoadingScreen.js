import React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Stack } from "@mui/material";
import Logo from "../assets/Images/logo.ico";

const LoadingScreen = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    handleToggle();
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {/* <CircularProgress color="inherit" /> */}
        <Stack>
          <img src={Logo} alt={"logo"} />
        </Stack>
      </Backdrop>
    </>
  );
};

export default LoadingScreen;
