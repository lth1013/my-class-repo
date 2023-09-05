import { createContext } from "react";

// TODO: add comments
const AlertContext = createContext({
  display: false,
  msg: "default value",
  theme: "",
  onClick: () => undefined
});

export default AlertContext;
