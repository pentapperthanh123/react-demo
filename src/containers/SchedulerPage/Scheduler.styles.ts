import { Tooltip } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

export const schedulerStyles: SxProps<Theme> = {
  padding: "50px 0 0 0",
  height: "100vh",
  ".fc-event-main": {
    cursor: "pointer",
    textAlign: "center",
    ".fc-event-title": {
      textAlign: "center",
    },
  },
};

export const toolTipStyles: SxProps<Theme> = {
  tooltip: {
    color: "black",
    backgroundColor: "transparent",
  },
};
