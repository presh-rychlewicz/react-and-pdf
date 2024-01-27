import { createContext, useContext } from "react";
import { Config } from "../types";

type ConfigContext = Config;

const configContext = createContext<ConfigContext>({
  title: "",
  author: "",
  year: 0,
  place: "",
  copyright: "",
});

const useConfigContext = () => useContext(configContext);

export default configContext;
export { useConfigContext };
