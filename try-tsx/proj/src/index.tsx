import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import ABC = require('./modules');

ABC.A.a();

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);