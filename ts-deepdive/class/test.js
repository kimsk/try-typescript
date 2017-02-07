var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = (function () {
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.pX = function () { return _this.x; };
        this.pY = function () { return _this.y; };
        this.add = function (p) {
            _this.x += p.pX();
            _this.y += p.pY();
        };
    }
    return Point;
}());
var p1 = new Point(10, 20);
var p2 = new Point(20, 10);
p1.add(p2);
console.log(p1);
var Point3D = (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        _this.pZ = function () { return _this.z; };
        _this.add = function (p) {
            _super.prototype.add.call(_this, p);
            _this.z += p.pZ();
        };
        return _this;
    }
    return Point3D;
}(Point));
