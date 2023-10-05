import React from "react";
import Components from "./Components/Components.js";
//import Parse from "parse";
//import * as Env from "./environments.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faComputer, faMusic, faMasksTheater, faHand, faHippo, faGuitar, faHandPeace, faFaceGrin, faMicrophone} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faComputer, faMusic, faMasksTheater, faHand, faHippo, faGuitar, faHandPeace, faFaceGrin, faMicrophone);

const App = () => {
  return (
    <Components/>
  );
};

export default App;