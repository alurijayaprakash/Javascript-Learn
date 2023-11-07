//  refer : https://www.youtube.com/watch?v=JZtJohuW9JM

// at 36.1 utlils.js we mentioned export before function 

// import { add, multiply } from "./36.1.Utils.js";
// console.log(add(3,4));
// console.log(multiply(3,4));

// this way we can import multiple func's

// ------------------------------------------------

// Use alias func names

// import { add as addX, multiply as mulX } from "./36.1.Utils.js";
// console.log(addX(3,4));
// console.log(mulX(3,4));

// ------------------------------------------------

// import everything * way

import * as Utils from "./36.1.Utils.js";
console.log(Utils.addX(3,4));
console.log(Utils.mulX(3,4));

// Note : instead of using import everything, import what func you want

