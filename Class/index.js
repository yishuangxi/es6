/**
 * Created by yishuangxi on 2016/3/22.
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}
let p = new Point(1, 2);
console.log("x: ", p.getX());


class ColorPoint extends Point{
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

let cp = new ColorPoint(3, 4, "red");
console.log("x: ", cp.getX(), "color: ", cp.getColor());
