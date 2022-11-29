import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#3498db",
    },
    secondary: {
      main: "#e67e22",
    },
    error: {
      main: "#e74c3c",
    },
    warning: {
      main: "#f1c40f",
    },
    info: {
      main: "#ecf0f1",
    },
    success: {
      main: "#2ecc71",
    },
    mode: "light",
  },
});
