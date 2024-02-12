// Your code here
class Polygon {
    constructor(sides)  {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length;
      }

    get perimeter() {
        return this.sides.reduce((accumulator,currentValue) => accumulator + currentValue, 0)
    }
}

class Triangle extends Polygon {

    get isValid() {
        const [a,b,c] = this.sides;
        return a + b > c && a + c > b && b + c > a
    }
}

class Square extends Polygon {

    get isValid() {
        const [a,b,c,d] = this.sides
        return a + b === c + d && a + c === b + d && a + d === b + c
    }

    get area() {
        const side = this.sides[0]
        return side * side
    }
}
