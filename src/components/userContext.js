import { createContext } from "react";

const userContext = createContext({
  activeTimer: false,
  setActiveTimer: (val) => {},
});

export default userContext;
