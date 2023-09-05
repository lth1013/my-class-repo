import { createContext } from "react";

// default context object with properties corresponding to Provider values
const AlertContext = createContext({
  display: false,
  msg: "default value",
  theme: "",
  onClick: () => undefined
});

export default AlertContext;
