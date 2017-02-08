var funcs = [];
var _loop_1 = function (i_1) {
    funcs.push(function () {
        console.log(i_1);
    });
};
// create a bunch of functions
for (var i_1 = 0; i_1 < 3; i_1++) {
    _loop_1(i_1);
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
funcs = [];
for (var i = 0; i < 3; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
