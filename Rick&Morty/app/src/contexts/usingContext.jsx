import { useContext } from "react";
import { Context } from "./ContextProvider";

export const UsingContext = () => {
  const context = useContext(Context);
  if (context) {
    return context;
  } else {
    throw new Error("UsingContext deb ser usado dentro de  ContextProvider");
  }
};
