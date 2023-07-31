import React from "react";
import Components from "./Components/Components.js";
//import Parse from "parse";
//import * as Env from "./environments.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComputer, faMusic, faMasksTheater, faHand } from '@fortawesome/free-solid-svg-icons';
library.add(faComputer, faMusic, faMasksTheater, faHand);

const App = () => {
  return (
    <Components />
  );
};

export default App;