import { useTheme } from '@emotion/react';
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import React from 'react'
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";

const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const {onToggleMode} = useSettings();
  const theme = useTheme();
  return (
    <Box
    sx={{
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      height: "100vh",
      width: 100,
    }}
  >
    <Stack
      direction="column"
      alignItems={"center"}
      justifyContent="space-between"
      sx={{ height: "100%" }}
      spacing={3}
    >
    <Stack alignItems={"center"} spacing={4}>

    
      <Box
         m={1}
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: 64,
          width: 64,
          borderRadius: 1.5,
        }}
      >
        <img src={Logo} alt={"chat app"} />
      </Box>
      <Stack
        sx={{ width: "max-content" }}
        direction="column"
        alignItems="center"
        spacing={3}
      >
        {Nav_Buttons.map((el) =>
          el.index === selected ? (
            <Box
              p={1}
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <IconButton
                sx={{ width: "max-content", color: "#fff" }}
                key={el.index}
              >
                {el.icon}
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(el.index);
              }}
              sx={{ width: "max-content",  color:theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
              key={el.index}
            >
              {el.icon}
            </IconButton>
          )
        )}
        <Divider sx={{ width: "48px" }} />
        {selected === 3 ? (
          <Box
            p={1}
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <IconButton sx={{ width: "max-content", color: "#fff" }}>
              <Gear />
            </IconButton>
          </Box>
        ) : (
          <IconButton
            onClick={() => {
              setSelected(3);
            }}
            sx={{ width: "max-content", color:theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
          >
            <Gear />
          </IconButton>
        )}
      </Stack>
      </Stack>
      <Stack spacing={4}>
      <Switch onChange={()=>{
          onToggleMode()
      }} defaultChecked/>
        <Avatar src={faker.image.avatar()} />
      </Stack>
    </Stack>
  </Box>
  )
}

export default SideBar
