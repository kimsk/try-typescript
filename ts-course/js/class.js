var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// one constructor maximum per class
/**
 * ReferenceItem
 */
var ReferenceItem = (function () {
    function ReferenceItem(name) {
        this.name = name;
        this.editor = name;
    }
    Object.defineProperty(ReferenceItem.prototype, "editor", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return ReferenceItem;
}());
var r = new ReferenceItem('test');
console.log(r.editor);
r.editor = 'test';
ReferenceItem.description;
var ReferenceItemChild = (function (_super) {
    __extends(ReferenceItemChild, _super);
    function ReferenceItemChild() {
        _super.call(this, 'lll');
    }
    return ReferenceItemChild;
}(ReferenceItem));
var r2 = new ReferenceItemChild();
// class expression
var Newspaper = (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        _super.apply(this, arguments);
    }
    return class_1;
}(ReferenceItem));
var np = new Newspaper('test');
var C2 = (function (_super) {
    __extends(C2, _super);
    function C2() {
        _super.apply(this, arguments);
    }
    return C2;
}((function () {
    function class_2() {
    }
    return class_2;
}())));
var c2 = new C2();
c2.title = 'title';
c2.main = 'main';
//# sourceMappingURL=class.js.map