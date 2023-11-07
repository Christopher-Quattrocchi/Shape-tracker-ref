// export default function Triangle(side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }

// Triangle.prototype.checkType = function () {
//   return "I can't answer that yet!";
// };

export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function () {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "scalene triangle";
  } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
    return "equilateral triangle";
  } else {
    return "isosceles triangle";
  }
};

// other Triangle code
Triangle.prototype.isBigTriangle = function(){
  const sum = this.side1 + this.side2 + this.side3;
  if(sum > 10){
    return 'big';
  } else {
    return 'little';
  }
};
/* istanbul ignore else */ 
// condition ? outcome if condition is truthy : outcome if condition is falsey`