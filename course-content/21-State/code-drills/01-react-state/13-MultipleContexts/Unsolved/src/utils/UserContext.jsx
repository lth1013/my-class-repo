import { createContext } from "react";
// TODO: add comments
const UserContext = createContext({
  name: "",
  getUserToken: () => {}
});

export default UserContext;
