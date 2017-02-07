class Point {
  constructor(protected x: number, protected y: number) {}

  public pX = () => this.x
  public pY = () => this.y
  public add = (p:Point) => {
    this.x += p.pX()
    this.y += p.pY()
  }
}

let p1 = new Point(10, 20)
let p2 = new Point(20, 10)
p1.add(p2)
console.log(p1)

class Point3D extends Point {
  constructor(x: number, y: number, protected z: number) {
    super(x, y)
  }

  public pZ = () => this.z
  public add = (p:Point3D) => {
    super.add(p)
    this.z += p.pZ()
  }
}
