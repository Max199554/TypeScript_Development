"use strict";
var flag;
(function (flag) {
    flag[flag["success"] = 1] = "success";
    flag[flag["error"] = 2] = "error";
})(flag || (flag = {}));
;
let s = flag.success;
console.log(s);
//# sourceMappingURL=HelloWorld.js.map