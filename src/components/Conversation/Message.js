import React from "react";
import { Box, Stack } from "@mui/material";
import { Chat_History} from "../../data";
import { Timeline } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //Timeline
             return <Timeline el={el}/>
            case "msg":
              switch (el.subtype) {
                case "img":
                // img msg
                  break;
                  case "doc":
                // doc msg
                  break;
                  case "link":
                // link msg
                  break;
                  case "reply":
                // reply msg
                  break;
                default:
                // text msg
                  break;
              }
              break;
            default:
           return <></>
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
