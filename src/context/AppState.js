import React from "react";
import AppContext from "./app-context";

function AppState(props) {
  return (
    <AppContext.Provider value={{ message: "This is the context content." }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
